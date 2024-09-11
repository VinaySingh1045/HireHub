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
      date: 'sep 4, 2024',
      time: '1 min',
      title: 'How to Get Testimonials to Grow Your Business',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and…',
      image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d2cbaefd1df233633e7a642d9f00ac24?_a=AQAEuiZ',
    },
    {
      id: 2,
      date: 'sep 4, 2024',
      time: '2 min',
      title: 'JavaScript Frameworks vs Laravel – Which Should You Choose for Web Development',
      description: 'When deciding between JavaScript frameworks and Laravel for web development, it’s essential to consider the type of project you are working on, the skill set of your team, and the specific requirements of your…',
      image: 'https://www.freecodecamp.org/news/content/images/size/w2000/2024/06/Group-3148.png', 
    },
    {
      id: 3,
      date: 'sep 4, 2024',
      time: '3 min',
      title: 'Making Friends With Numbers - Data ',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and…',
      image: 'image3.jpg', 
    },
    {
      id: 4,
      date: 'sep 4, 2024',
      time: '3 min',
      title: 'Making Friends With Numbers - Data ',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and…',
      image: 'image3.jpg', 
    },
    {
      id: 5,
      date: 'sep 4, 2024',
      time: '3 min',
      title: 'Making Friends With Numbers - Data ',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and…',
      image: 'image3.jpg', 
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
