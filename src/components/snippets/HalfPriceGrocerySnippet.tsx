import TerminalCommand from '../ui/TerminalCommand'

export const HalfPriceGrocerySnippet = () => (
  <div className='flex flex-col space-y-3 sm:space-y-4 w-full overflow-hidden text-xs'>
    <span className='text-pink-400' aria-hidden='true'>
      # Setup & Launch
    </span>
    <TerminalCommand command='cd' args='halfprice-grocery' />
    <TerminalCommand command='ls' args='-l' />
    <div className='text-gray-300 '>
      <span className='text-blue-400 font-medium'>backend/</span>{' '}
      <span className='text-blue-400 font-medium'>frontend/</span>{' '}
      <span className='text-yellow-300'>docker-compose.yml</span>{' '}
      <span className='text-gray-300'>README.md</span>{' '}
      <span className='text-gray-300'>package.json</span>
    </div>

    <div className='mt-3 text-gray-300'>
      <TerminalCommand command='npm' args='start' />
      <span className='text-white font-medium block mt-2'>Starting servers... 🚀</span>
    </div>

    <div className='mt-2 text-yellow-300 transition-colors duration-300 hover:text-yellow-200'>
      ✓ Frontend running at http://localhost:3000
    </div>
    <div className='text-yellow-300 transition-colors duration-300 hover:text-yellow-200'>
      ✓ Backend API running at http://localhost:5000
    </div>
    <div className='mt-1 sm:mt-2'>
      <span className='text-emerald-400 text-xl font-bold animate-pulse'>▋</span>
    </div>
  </div>
)
