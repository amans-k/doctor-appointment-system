import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
  const {doctors} = useContext(AppContext)
  
  if (!doctors || doctors.length === 0) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div>
      <p className=' p-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
      <div>
        {doctors.slice(0,3).map((item, index) => (
          <div className=' grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 py-4 border-b' key={item._id || index}>
            <div className=' flex flex-col sm:flex-row gap-4'>
              <img className=' w-32 h-32 object-cover bg-indigo-50 rounded' src={item.image} alt={item.name} />
              <div className=' flex-1 text-sm text-zinc-600'>
                <p className=' text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className=' text-zinc-950 font-medium mt-2'>Address:</p>
                <p className=' text-xs'>{item.address?.line1 || 'Address line 1'}</p>
                <p className=' text-xs'>{item.address?.line2 || 'Address line 2'}</p>
                <p className=' text-xs mt-2'>
                  <span className=' text-sm text-neutral-700 font-medium'>Date & Time:</span> 25, July, 2024 | 8:30 PM
                </p>
              </div>
            </div>
            <div className=' flex flex-col gap-2 justify-end sm:items-end'>
              <button className=' text-sm text-stone-500 text-center sm:min-w-48 py-2 px-4 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                Pay Online
              </button>
              <button className=' text-sm text-stone-500 text-center sm:min-w-48 py-2 px-4 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment