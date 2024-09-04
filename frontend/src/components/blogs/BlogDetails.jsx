import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();

    // Sample data; you can replace this with fetched data based on the blog ID.
    const blog = {
        id: 1,
        date: 'May 30, 2023',
        time: '1 min read',
        author: 'Author Name',
        title: 'How to Get Testimonials to Grow Your Business',
        subtitle: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
        image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d2cbaefd1df233633e7a642d9f00ac24?_a=AQAEuiZ',
        content: `
      Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. 
      Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.

      “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”

      You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.

      Create Relevant Content:

      Writing a blog is a great way to position yourself as an authority in your field and express your voice on relevant topics. Do you want to improve your site’s SEO ranking? 
      Consider topics that focus on relevant keywords and relate back to your website or business. You can also share posts between Facebook, LinkedIn, and other platforms to reach new people and help visitors get to know you better.

      Blogging is a great way to pursue your business’ personality shine through. Choose a great image feature in your posts and articles for extra engagement. Are you ready to get started? Simply click on Create now to begin.
    `,
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-4 text-gray-600 text-sm">
                {blog.author} · {blog.date} · {blog.time}
            </div>
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <h2 className="text-xl text-gray-700 mb-4">{blog.subtitle}</h2>
            <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover mb-6" />
            <div className="prose">
                <p>{blog.content}</p>
            </div>
            <div className="flex mt-6 space-x-4 text-gray-600">
                <a href="#" className="hover:text-gray-800"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-gray-800"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-gray-800"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="hover:text-gray-800"><i className="fab fa-envelope"></i></a>
            </div>
        </div>
    );
};

export default BlogDetails;
