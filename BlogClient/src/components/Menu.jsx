import React from 'react'
import postimg from '../assets/postimg.jpg'
function Menu() {
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
    <div >
        <h1 className='text-gray-500 font-bold text-2xl'>Other post you may like</h1>
         <div className='mt-8 flex flex-col gap-5'>
            {
                posts.map((post)=>(
                    <div key={post.id}>
                        <img src={post.img} alt=""  className='w-[300px] h-[180px] object-cover'/>
                        <h2 className='text-3xl font-medium'>{post.title}</h2>
                        <button className='bg-teal-500 mt-3 px-3 py-1 text-gray-800 rounded-md'>Read More</button>
                    </div>
                ))
            }
         </div>
    </div>
  )
}

export default Menu