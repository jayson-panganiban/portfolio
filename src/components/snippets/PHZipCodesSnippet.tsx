export const PHZipCodesSnippet = () => (
  <div className='text-gray-200'>
    <div className='mb-4'>
      <span className='text-pink-400'>import</span>{' '}
      <span className='text-blue-300'>phzipcodes</span> <span className='text-pink-400'>as</span>{' '}
      <span className='text-blue-300'>phz</span>
    </div>
    <div className='mb-2'>
      <span className='text-emerald-400'>zipcode</span> = <span className='text-blue-300'>phz</span>
      <span>.</span>
      <span className='text-yellow-300'>search</span>(
      <span className='text-emerald-400'>zip_code</span>=
      <span className='text-yellow-300'>4117</span>)
    </div>
    <div className='mb-3'>
      <span className='text-yellow-300'>print</span>(
      <span className='text-emerald-400'>zipcode</span>)
    </div>
    <div className='mb-2'>
      <span className='text-gray-200'># Output:</span>
    </div>
    <div>
      {'{'}
      <span className='text-yellow-300'>&lsquo;code&rsquo;</span>:{' '}
      <span className='text-yellow-300'>&lsquo;4117&rsquo;</span>
      <span>,</span> <span className='text-yellow-300'>&rsquo;city_municipality&rsquo;</span>:{' '}
      <span className='text-yellow-300'>&lsquo;Gen. Mariano Alvarez&rsquo;</span>
      <span>,</span> <span className='text-yellow-300'>&lsquo;province&rsquo;</span>:{' '}
      <span className='text-yellow-300'>&lsquo;Cavite&rsquo;</span>
      {'}'}
    </div>
  </div>
)
