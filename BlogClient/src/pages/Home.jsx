import React, { useEffect, useState } from "react";
import postimg from "../assets/postimg.jpg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Hero from "../components/Hero";
function Home() {
  const posts = [
    {
      id: 1,
      title: "10 facts about learnin python programming",
      dec: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img: postimg,
    },
    {
      id: 2,
      title: "10 facts about learnin python programming",
      dec: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img: postimg,
    },
    {
      id: 3,
      title: "10 facts about learnin python programming",
      dec: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img: postimg,
    },
    {
      id: 4,
      title: "10 facts about learnin python programming",
      dec: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img: postimg,
    },
    {
      id: 5,
      title: "10 facts about learnin python programming",
      dec: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img: postimg,
    },
  ];
  const [postes, setPosts] = useState();
  const category = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http:localhost:8080/api/v1/posts${category}`
      );
      setPosts(res.data.posts);
    };
    fetchData();
  }, [category]);
  return (
    <>
    <Hero/>
      <div className="px-[150px] py-6">
        <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              className="card card-compact w-72  bg-base-100 shadow-xl"
              key={post.id}
            >
              <figure>
                <img
                  src={post.img}
                  alt="blog"
                  className="h-[200px] w-[288px] object-cover"
                />
              </figure>
              <div className="card-body">
                <Link to={`/post/${post.id}`}>
                  <h1 className="text-teal-500 font-semibold text-2xl ">
                    {post.title}
                  </h1>
                </Link>

                <div className="card-actions justify-end">
                  <button className="bg-zinc-50 text-teal-400 px-3 py-1 rounded-sm mt-2 border-[1px] border-teal-500 hover:bg-teal-600 duration-500 hover:text-zinc-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* {posts.map((post)=>(
          <div key={post.id} className=' '>
            <div >
              <img src={post.img} alt=""  className='w-[400px] h-[300px] object-cover'/>
            </div>
            <div className='pr-[75px]'>
              <Link to={`/post/${post.id}`}>
                <h1 className='text-teal-500 font-semibold text-2xl my-3'>{post.title}</h1>
              </Link>
              <p className='text-[18px] font-normal text-justify my-3'>{post.dec}</p>
              <button className='bg-zinc-50 text-teal-400 px-3 py-1 rounded-sm mt-2 border-[1px] border-teal-500 hover:bg-teal-600 duration-500 hover:text-zinc-100'>Read More</button>
            </div>
          </div>
        ))} */}
        </div>
      </div>
    </>
  );
}

export default Home;
