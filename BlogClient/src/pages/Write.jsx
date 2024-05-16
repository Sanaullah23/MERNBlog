import React from "react";

function Write() {
  return (
    <div className="px-[130px] my-6 flex gap-4 ">
      <div className="w-[1000px] flex flex-col gap-5">
        <input
          type="text"
          placeholder="Post Title"
          className="px-6 py-2 border-[1px]
         border-gray-800 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-5 w-[350px] ">
        <div className="p-2 border-[1px] border-gray-500">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <div className="mt-3">
            <input type="file" style={{ display: "none" }} id="file" />
            <label
              htmlFor="file"
              className="cursor-pointer bg-teal-400 
          px-4 py-1 text-white rounded-sm"
            >
              Upload Image
            </label>
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <button className="bg-gray-500 text-zinc-50 px-2 py-1 rounded-sm">
              Save as draft
            </button>
            <button className="bg-teal-500 text-zinc-50 px-2 py-1 rounded-sm">
              Update
            </button>
          </div>
        </div>
        <div className="p-2 border-[1px] border-gray-500 text-teal-400">
          <h1 className="text-2xl font-bold text-gray-800">Category</h1>
          <div>
            <div>
              <input type="radio" name="cat" id="science" />
              <label htmlFor="science">Science</label>
            </div>
            <div>
              <input type="radio" name="cat" id="technology" />
              <label htmlFor="technology">Technology</label>
            </div>
            <div>
              <input type="radio"  name="cat" id="design" />
              <label htmlFor="design">Design</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
