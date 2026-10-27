"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const RECOPIED_DELAY_MS = 2000;

/**
 * Copies text to the clipboard and tracks a transient `copied` flag.
 * The requeue timer is cleared on re-copy and on unmount, so state
 * is never set after the component goes away.
 */
export function useCopyToClipboard(resetAfterMs = RECOPIED_DELAY_MS) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
      } finally {
        clearTimeout(resetTimer.current);
        setCopied(true);
        resetTimer.current = setTimeout(() => setCopied(false), resetAfterMs);
      }
    },
    [resetAfterMs],
  );

  return { copied, copy };
}
