import React from 'react'

const NewAppointments = () => {
  return (
    <>
    
<div class="w-[50%] p-4 m-3 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
    <p class="font-bold text-black text-md dark:text-white">
        Messages
    </p>
    <ul>
        <li class="flex items-center my-6 space-x-2">
            <a href="#" class="relative block">
                <img alt="profil" src="/" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div class="flex flex-col">
                <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                    Charlie Rabiller
                </span>
                <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                    Hey John ! Do you read the NextJS doc ?
                </span>
            </div>
        </li>
        <li class="flex items-center my-6 space-x-2">
            <a href="#" class="relative block">
                <img alt="profil" src="/images/person/5.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div class="flex flex-col">
                <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                    Marie Lou
                </span>
                <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                    No I think the dog is better...
                </span>
            </div>
        </li>
        <li class="flex items-center my-6 space-x-2">
            <a href="#" class="relative block">
                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div class="flex flex-col">
                <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                    Ivan Buck
                </span>
                <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                    Seriously ? haha Bob is not a child !
                </span>
            </div>
        </li>
        <li class="flex items-center my-6 space-x-2">
            <a href="#" class="relative block">
                <img alt="profil" src="/images/person/7.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div class="flex flex-col">
                <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                    Marina Farga
                </span>
                <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                    Do you need that design ?
                </span>
            </div>
        </li>
    </ul>
</div>

    </>
  )
}

export default NewAppointments