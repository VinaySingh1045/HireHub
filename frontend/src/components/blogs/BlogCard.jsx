import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = () => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate("/blog/details/" + id);    
    }

  const blogs = [
    {
      id: 1,
      date: 'may 4, 2024',
      time: '1 min',
      title: 'React Mindset: How New React Developers Should Think',
      description: 'React, a prominent JavaScript library for building user interfaces, enhances front-end development through reusable components and efficient UI management  New developers should adopt key principles such as thinking in components, embracing declarative…',
      image: '/mindSet.avif',
    },
    {
      id: 2,
      date: 'June 15, 2024',
      time: '2 min',
      title: 'JavaScript Frameworks vs Laravel – Which Should You Choose for Web Development',
      description: 'When deciding between JavaScript frameworks and Laravel for web development, it’s essential to consider the type of project you are working on, the skill set of your team, and the specific requirements of your…',
      image: '/Group-3148.png', 
    },
    {
      id: 3,
      date: 'sep 30, 2024',
      time: '10 min',
      title: 'MERN stack for Web Development ',
      description: 'MERN is a full-stack web development framework that includes MongoDB, Express.js, React.js, and Node.js. It allows developers to build dynamic web applications using JavaScript for both the client and server sides. MongoDB serves as the database, while Express.js handles the server-side logic. React.js creates interactive user interfaces, and …',
      image: '/mern.webp', 
    },
    
  ];

  return (
    <div className=" mx-7 px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} onClick={()=>handleClick(blog.id)} className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-fill" />
            <div className="p-4 cursor-pointer">
              <p className="text-gray-600 text-sm mb-2">
                {blog.date} · {blog.time}
              </p>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
