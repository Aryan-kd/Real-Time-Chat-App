import React from "react";
import { Avatar } from "../../assets";
import { Input } from "../../components";

const Dashboard = () => {
  const contacts = [
    {
      name: "Vedant",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Vivek",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Aman",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Ankit",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Suraj",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Sumit",
      status: "Available",
      img: Avatar,
    },
  ];
  return (
    <div className="w-screen flex scroll-smooth focus:scroll-auto">
      <div className="w-[25%] h-screen bg-secondary overflow-y-scroll">
        <div className="flex item-center my-8 mx-3">
          <div className="p-[2px] rounded-full border-primary border">
            <img src={Avatar} width={75} height={75} alt="Image1" />
          </div>

          <div className="ml-8">
            <h3 className="text-2xl">Aryan Kodinya</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />

        <div className="px-10 mt-4">
          <p className="text-primary text-lg">Messages</p>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex item-center py-2 border-b border-gray-300">
                  <div className="cursor-pointer flex item-center">
                    <div className="p-[2px] rounded-full border-primary border">
                      <img src={img} width={50} height={50} alt="Image1" />
                    </div>

                    <div className="ml-8">
                      <h3 className="text-base font-semibold">{name}</h3>
                      <p className="text-xs font-light text-gray-600">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[80px] mt-5 rounded-full flex items-center px-5">
          <div className="cursor-pointer">
            <img src={Avatar} width={50} height={50} alt="avatar" />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-base">Aryan</h3>
            <p className="text-sm font-light text-gray-600">online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
        </div>

        <div className="h-[70%] w-full overflow-y-scroll border-b-2 border-black">
          <div className="h-auto px-5 pt-4 pb-3">
            <div className="max-h-fit min-h-[50px] max-w-[60%] w-fit bg-secondary rounded-b-lg rounded-tr-xl p-3 mb-6">
              Lorem ipsum.
            </div>
            <div className="max-h-fit min-h-[50px] max-w-[60%] bg-primary rounded-b-lg rounded-tl-xl ml-auto p-3 text-white mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              ipsum deleniti molestias modi dolores maiores laborum veritatis ex
              dignissimos itaque! Error at, consequatur tenetur commodi cum quos
              dicta accusamus fugit.
            </div>
            <div className="max-h-fit min-h-[50px] max-w-[60%] w-fit bg-secondary rounded-b-lg rounded-tr-xl p-3 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              qui!
            </div>
            <div className="max-h-fit min-h-[50px] max-w-[60%] bg-primary rounded-b-lg rounded-tl-xl ml-auto p-3 text-white mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div className="max-h-fit min-h-[50px] max-w-[60%] w-fit bg-secondary rounded-b-lg rounded-tr-xl p-3 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              ipsa autem ad praesentium tempore id?
            </div>
            <div className="max-h-fit min-h-[50px] max-w-[60%] bg-primary rounded-b-lg rounded-tl-xl ml-auto p-3 text-white mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>

        <div className="p-5 w-full flex items-center justify-between">
          <Input
            placeholder="type message here..."
            inpClassName="w-[75%]"
            type="text"
            className="p-4 border-0 shadow-md rounded-full bg-light outline-none focus:ring-0 focus:border-0"
          />

          <div className="flex">
            <div className="rounded-full ml-3 cursor-pointer bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
            </div>
            <div className="rounded-full ml-3 cursor-pointer bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-send"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-screen"></div>
    </div>
  );
};

export default Dashboard;
