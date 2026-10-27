"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/config/site";

export function LiveClock() {
  const [clocks, setClocks] = useState<{
    utc: string;
    local: string;
    tzAbbr: string;
  } | null>(null);

  useEffect(() => {
    function update() {
      const now = new Date();
      const utc = now.toISOString().substring(11, 19);

      const localTime = new Intl.DateTimeFormat("en-AU", {
        timeZone: SITE_CONFIG.timeZone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(now);

      const melDate = new Date(now.toLocaleString("en-US", { timeZone: SITE_CONFIG.timeZone }));
      const utcDate = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
      const diffHours = Math.round((melDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60));
      const tzAbbr = diffHours === 11 ? "AEDT" : "AEST";

      setClocks({ utc, local: localTime, tzAbbr });
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!clocks) {
    return (
      <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono tabular-nums text-[var(--ink-secondary)] whitespace-nowrap shrink-0">
        <span className="hidden sm:inline">UTC: --:--:--</span>
        <span>LOC: --:--:--</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] tabular-nums whitespace-nowrap shrink-0">
      <div className="hidden sm:block">
        <span className="text-[var(--ink-tertiary)] mr-1">UTC:</span>
        <span className="text-[var(--ink-primary)] font-medium">{clocks.utc}</span>
      </div>
      <div>
        <span className="text-[var(--ink-tertiary)] mr-1">{clocks.tzAbbr}:</span>
        <span className="text-[var(--ink-primary)] font-medium">{clocks.local}</span>
      </div>
    </div>
  );
}
