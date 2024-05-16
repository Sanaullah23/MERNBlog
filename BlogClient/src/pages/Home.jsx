import React from 'react'
import postimg from "../assets/postimg.jpg"
import { Link } from 'react-router-dom';
function Home() {

  const posts=[
    {
      id:1,
      title:"10 facts about learnin python programming",
      dec:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img:postimg, 
    },
    {
      id:2,
      title:"10 facts about learnin python programming",
      dec:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img:postimg, 
    },
    {
      id:3,
      title:"10 facts about learnin python programming",
      dec:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img:postimg, 
    },
    {
      id:4,
      title:"10 facts about learnin python programming",
      dec:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img:postimg, 
    },
    {
      id:5,
      title:"10 facts about learnin python programming",
      dec:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias placeat cupiditate consectetur expedita dignissimos at labore ipsa aliquam asperiores quam vitae ullam sapiente accusamus, nisi tempore fugiat esse perferendis? Dolorem consequuntur esse, asperiores impedit, error officia eos mollitia a ex minus unde. Aperiam accusantium excepturi facere inventore, corrupti ut",
      img:postimg, 
    },
  ];
  return (
    <div className='px-[150px] py-6'>
      <div className='flex flex-col gap-4'>
        {posts.map((post)=>(
          <div key={post.id} className='flex gap-8 '>
            <div >
              <img src={post.img} alt=""  className='w-[800px] object-cover'/>
            </div>
            <div>
              <Link to={`/post/${post.id}`}>
                <h1 className='text-teal-500 font-semibold text-2xl'>{post.title}</h1>
              </Link>
              <p className='text-[18px] font-normal text-justify'>{post.dec}</p>
              <button className='bg-zinc-50 text-teal-400 px-3 py-1 rounded-sm mt-2 border-[1px] border-teal-500 hover:bg-teal-600 duration-500 hover:text-zinc-100'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home