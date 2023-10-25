import React from "react";

const DashBoard = () => {
  return (
    <div>
      <div>
        <h1 className="pl-10 pt-5 text-4xl font-mono font-bold">DashBoard</h1>
      </div>
      <div className="pl-5 mt-8">
        <div className="bg-[#111820]/0 border border-black-20 shadow-lg text-black/70 rounded-xl w-[400px] h-[300px] ">
          <div className="text-black  pt-3 text-2xl pl-5 mb-5">
            <h1>My Appoinments</h1>
          </div>
          <div className="border border-black/10 mt-3  mx-4 rounded-xl   flex justify-between pl-4 pr-4 py-2  text-base font-semibold">
            <div>
              <h1>Danny McLoan</h1>
              <h1>12/12/2021</h1>
            </div>
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </div>
          </div>
          <div className="border border-black/10 mt-3  mx-4  rounded-xl   flex justify-between pl-4 pr-4 py-2  text-base font-semibold">
            <div>
              <h1>Danny McLoan</h1>
              <h1>12/12/2021</h1>
            </div>
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </div>
          </div>
          <div  className=" flex text text-center justify-center  items-center p-5">Veiw all</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
