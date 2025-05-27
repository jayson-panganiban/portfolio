import React from 'react'

export const DefaultCodeSnippet: React.FC = () => {
  return (
    <div className='text-gray-300 font-mono text-sm'>
      <div className='text-yellow-400'>{/*No specific code snippet available*/}</div>
      <div className='text-emerald-400'>{/* Displaying default code sample */}</div>
      <div className='mt-2'></div>
      <div className='text-blue-400'>
        function <span className='text-yellow-300'>projectSample</span>() {'{'}
      </div>
      <div className='pl-4 text-gray-300'>
        console.log(<span className='text-emerald-300'>&quot;Hello from the project!&quot;</span>);
      </div>
      <div className='pl-4 text-pink-400'>
        return{' '}
        <span className='text-emerald-300'>&quot;Check out the project details below&quot;</span>;
      </div>
      <div className='text-blue-400'>{'}'}</div>
      <div className='mt-2'></div>
      <div className='text-gray-300'>{/* Run the function to see the result */}</div>
      <div className='text-blue-400'>projectSample();</div>
    </div>
  )
}
