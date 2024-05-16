import React from "react";
import profile from "../assets/profile.jpg";
import user from "../assets/postimg.jpg";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="px-[130px] py-6 flex  justify-between gap-6 ">
      <div >
        <div >
          <img
            src={profile}
            alt=""
            className="w-[700px] h-[300px] object-cover"
          />
          <div className="flex gap-3 mt-2 ">
            <img
              src={user}
              alt=""
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div className="text-[14px]">
              <span className="font-bold">Sanaullah</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="text-zinc-50 flex gap-3 justify-center items-center">
              <Link to={`/write?edit=2`}>
                <button className="px-3 py-1 rounded-md bg-teal-500">
                  edit
                </button>
              </Link>
              <button className="px-3 py-1 rounded-md bg-red-400">
                delete
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2 w-[700px]">
          <h1 className="text-3xl font-bold my-2">10 facts about learnin python programming</h1>
          <p className=" text-gray-700 text-justify leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             <br /><br />
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             <br /><br />
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eaque expedita consectetur velit aperiam incidunt.
            
            </p>
        </div>
      </div>
      <Menu/>
    </div>
  );
}

export default Single;
