import React from 'react'

const Profile = () => {
    return (
        <div class="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-80 dark:bg-gray-800">
            <div class="flex items-center justify-between w-full mb-6">
                <p class="text-xl font-medium text-gray-800 dark:text-white">
                    Profile
                </p>
            </div>
            <div className='flex items-center flex-col justify-around'>
                <div className='w-6 bg-pink-500 rounded-full p-12 '>
                </div>
                <p class="text-xl p-3 font-medium text-gray-800 dark:text-white">
                    Dr. James Clear, MBBS
                </p>
                <p class="text-xl p-3 font-medium text-gray-800 dark:text-white">
                    Profile
                </p>
                <div className="flex">
                    <button className='bg-white px-2 py-1 rounded-lg m-1'>View profile</button>
                    <button className='bg-white px-2 py-1 rounded-lg m-1'>View</button>
                </div>
            </div>



        </div>
    )
}

export default Profile