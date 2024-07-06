import React from 'react'

const Forcast = ({title,data}) => {
  return (
      <div>
          <div className='flex items-center justify-start mt-6 '>
              <p className='font-medium uppercase'>{ title}</p>
          </div>
          <hr className='my-1 ' />
          <div className='flex items-center justify-between'>
            {
                data.map((d, index) => (
                    <div key={index} className='flex justify-center flex-col items-center'>
                        <p className='font-light text-sm'>{d.title}</p>
                        <img src={d.icon} alt='weather' className='w-12 my-1' />
                        <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
                    </div>
                ))
            }
          </div>
    </div>
  )
}

export default Forcast