export const FAQMateSnippet = () => (
  <div className='text-gray-200 text-xs md:text-sm font-mono'>
    <div className='mb-2'>
      <span className='text-blue-400'>➜</span> <span className='text-green-400'>faq-mate</span>{' '}
      <span className='text-blue-400'>git:(</span>
      <span className='text-yellow-300'>master</span>
      <span className='text-blue-400'>) ✗</span>{' '}
      <span className='text-white'>python cli.py chat</span>
    </div>

    <div className='mb-2'>
      <span className='text-yellow-300'>🚀 Initializing FAQ Mate...</span>
    </div>
    <div className='mb-2'>
      <span className='text-blue-300'>INFO:faq_mate.rag:</span>
      <span className='text-gray-300'>Loaded existing index with </span>
      <span className='text-yellow-300'>852</span>
      <span className='text-gray-300'> documents</span>
    </div>
    <div className='mb-3'>
      <span className='text-green-400'>✅ Ready! Loaded </span>
      <span className='text-yellow-300'>852</span>
      <span className='text-green-400'> documents</span>
    </div>

    <div className='mb-1'>
      <span className='text-emerald-400'>FAQ Mate - Australian Car Insurance Assistant</span>
    </div>
    <div className='mb-1'>
      <span className='text-gray-300'>Ask me anything about car insurance in Australia!</span>
    </div>
    <div className='mb-2'>
      <span className='text-gray-300'>
        Type &apos;quit&apos; to exit, &apos;help&apos; for commands.
      </span>
    </div>

    <div>
      <span className='text-blue-400'>You:</span>{' '}
      <span className='text-yellow-300'>&quot;What does comprehensive insurance cover?&quot;</span>
      <span className='text-white animate-pulse'>▋</span>
    </div>
  </div>
)
