import React, { useState } from 'react'
import { BiSearch, BiCurrentLocation} from 'react-icons/bi'

const Inputs = ({ setQuery, setUnits }) => {
    const [city, setCity] = useState('')

    const handleSearchClick = () => { 
        if (city !== '') setQuery({ q: city })
    }
    
    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setQuery({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                })
            })
        }
    }

  return (
      <div className='flex flex-row justify-center my-6'>
          <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
              <input
                  value={city}
                  onChange={(e) => setCity(e.currentTarget.value)}
                type='text' placeholder='Search by city...'
                className='text-gray-500 text-md font-light p-2 w-full shadow-sm capitalize focus:outline-none placeholder:lowercase'
              />
              <BiSearch
                  size={30}
                  className='cursor-pointer transition ease-out hover:scale-125'
                  onClick={handleSearchClick}
              />
              <BiCurrentLocation
                  size={30}
                  className='cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleLocationClick}
              />
              
          </div>
          <div className='flex flex-row w-1/4 items-center justify-center'>
              
              <button className='text-2xl font-medium transition ease-out hover:scale-125'
                    onClick={() => setUnits('metric')}  
              >
                  °C
              </button>

              <p className='text-2xl font-medium mx-1'>|</p>

              <button className='text-2xl font-medium transition ease-out hover:scale-125'
                    onClick={() => setUnits('imperial')}
              >
                  °F
              </button>

          </div>
    </div>
  )
}

export default Inputs