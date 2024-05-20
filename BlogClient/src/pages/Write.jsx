import { useState } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

function Write() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate(); // Move useNavigate hook outside of the function

  const blog = {
    title: title,
    desc: value
  };

  const handlePublishBlog = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/posts/createpost',
        blog,
        { withCredentials: true } // Include credentials
      );
      if (res.status === 201) {
        console.log(res.data.post);
        navigate('/'); // Use navigate function here
      } else {
        throw new Error('Error while publishing blog');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="px-[130px] my-6 flex gap-4 ">
      <form>
        <div className="w-[750px] flex flex-col gap-5">
          <input
            type="text"
            placeholder="Post Title"
            className="px-6 py-2 border-[1px] border-gray-800 rounded-md"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="h-[420px] overflow-hidden border-[1px] border-gray-600">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="h-[100%] border-none"
            />
          </div>
          <button
            className="cursor-pointer bg-teal-400 px-4 py-2 text-white rounded-sm text-[18px] font-bold"
            onClick={handlePublishBlog}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Write;
