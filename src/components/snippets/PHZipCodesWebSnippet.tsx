export const PHZipCodesWebSnippet = () => (
  <div className='text-gray-200 text-xs md:text-sm'>
    <div className='mb-2'>
      <span className='text-pink-400'>from</span> <span className='text-blue-300'>typing</span>{' '}
      <span className='text-pink-400'>import</span>{' '}
      <span className='text-blue-300'>Dict, List</span>
    </div>
    <div className='mb-2'>
      <span className='text-pink-400'>from</span> <span className='text-blue-300'>fastapi</span>{' '}
      <span className='text-pink-400'>import</span>{' '}
      <span className='text-blue-300'>FastAPI, Query</span>
    </div>
    <div className='mb-4'>
      <span className='text-pink-400'>from</span> <span className='text-blue-300'>phzipcodes</span>{' '}
      <span className='text-pink-400'>import</span> <span className='text-blue-300'>search</span>
    </div>

    <div className='mb-3'>
      <span className='text-emerald-400'>app</span> ={' '}
      <span className='text-yellow-300'>FastAPI</span>()
    </div>

    <div className='mb-2'>
      <span className='text-emerald-400'>@app.get</span>(
      <span className='text-yellow-300'>&quot;/search&quot;</span>)
    </div>
    <div className='mb-2'>
      <span className='text-pink-400'>async def</span>{' '}
      <span className='text-yellow-300'>search_zipcode</span>(
      <span className='text-emerald-400'>query</span>: <span className='text-yellow-300'>str</span>{' '}
      = <span className='text-blue-300'>Query</span>(...)) -{'>'}{' '}
      <span className='text-blue-300'>Dict</span>:
    </div>
    <div className='pl-4 mb-2'>
      <span className='text-gray-400'>
        &quot;&quot;&quot;Search zipcodes in the Philippines.&quot;&quot;&quot;
      </span>
    </div>
    <div className='pl-4'>
      <span className='text-pink-400'>return</span> <span className='text-yellow-300'>search</span>(
      <span className='text-emerald-400'>zip_code</span>=
      <span className='text-emerald-400'>query</span>)
    </div>
  </div>
)
