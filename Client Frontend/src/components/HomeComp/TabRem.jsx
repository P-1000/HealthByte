import React from 'react'

const TabRem = () => {
  return (
    <div className="border bg-blue-50 hover:scale-[1.05] cursor-pointer transition-all border-black/10 mt-3  mx-4 rounded-xl   flex justify-between pl-4 pr-4 py-2  text-base font-semibold">
    <div className=" p-1 felx flex-col  ">
      <h1 className="">Danny McLoan</h1>
      <h1 className=" mt-1 font-normal text-sm">12/12/2021</h1>
    </div>
    <div>
      <img
        src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="  object-cover object-right  w-14 h-14 rounded-full"
      />
    </div>
  </div>
  )
}

export default TabRem