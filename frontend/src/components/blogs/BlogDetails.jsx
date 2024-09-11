import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();

    const blogs = [
        {
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
        },
        {
            id: 2,
            date: 'June 15, 2023',
            time: '2 min read',
            author: 'Another Author',
            title: 'JavaScript Frameworks vs Laravel – Which Should You Choose for Web Development',
            subtitle: 'Comparing Front-End Dynamism with Robust Backend Solutions for Modern Web Applications.',
            image: 'https://www.freecodecamp.org/news/content/images/size/w2000/2024/06/Group-3148.png',
            content: `
                When deciding between JavaScript frameworks and Laravel for web development, it’s essential to consider the type of project you are working on, the skill set of your team, and the specific requirements of your application. Here's a comparison to help you make an informed decision:
                
                JavaScript Frameworks:

                1. Primarily used for building dynamic, interactive user interfaces.
                2. Ideal for Single Page Applications (SPAs) and real-time features.
                3. Popular frameworks include React, Vue, and Angular.
                4. Focus on front-end development with extensive client-side capabilities.
                5. Often combined with Node.js for a full-stack JavaScript solution.
                6. Offers high interactivity and responsive UIs.
                7. Easier to scale on the client side for complex UIs.
                8. Large ecosystem and active community support.
                9. Best for projects requiring heavy front-end logic and real-time updates.
                10. Suitable for mobile app development with tools like React Native.
                
                Laravel:
                
                1. A PHP-based backend framework following the MVC architecture.
                2. Ideal for complex server-side logic and database management.
                3. Provides built-in tools for routing, authentication, and database handling.
                4. Focuses on server-side tasks with elegant syntax and ease of use.
                5. Best suited for traditional web applications and RESTful APIs.
                6. Strong community with extensive documentation and resources.
                7. Scalable on the backend, especially for large applications.
                8. Integrates well with front-end frameworks like Vue or React.
                9. Offers a robust ecosystem with tools for deployment and server management.
                10. Suitable for projects with strong backend requirements, such as e-commerce platforms and CMS.
            `,
        },
        // Add more blog entries here...
    ];

    const blog = blogs.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-4 text-gray-600 text-sm">
                {blog.author} · {blog.date} · {blog.time}
            </div>
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <h2 className="text-xl text-gray-700 mb-4">{blog.subtitle}</h2>
            <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover mb-6" />
            <div className="prose">
                {blog.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
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
