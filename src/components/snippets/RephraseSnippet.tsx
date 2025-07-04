import TerminalCommand from '@/components/ui/TerminalCommand'

export const RephraseSnippet = () => (
  <div className='flex flex-col space-y-3 w-full text-xs md:text-sm mb-4 md:mb-6'>
    <span className='text-pink-400' aria-hidden='true'>
      # Install Rephrase CLI
    </span>
    <div className='mt-3 text-gray-200'>
      <TerminalCommand command='pip' args='install rephrase' className='mb-2 md:mb-3' />
      <span className='text-gray-200'>Installed 1 package in 2ms</span>
      <br /> <span className='text-emerald-400'>+</span>{' '}
      <span className='text-gray-200'>Rephrase==0.1.1</span>
    </div>
    <span className='text-pink-400' aria-hidden='true'>
      # Rephrase text
    </span>
    <div className='mt-3 text-gray-200'>
      <TerminalCommand command='rephrase' args='"The meeting is scheduled next week!"' />
    </div>
    <span className='mt-2 text-pink-400' aria-hidden='true'>
      # Sample output
    </span>
    <span className='mt-2 text-yellow-300' aria-hidden='true'>
      The meeting is planned for next week.
    </span>
    <TerminalCommand command='▋' className='animate-pulse' />
  </div>
)
