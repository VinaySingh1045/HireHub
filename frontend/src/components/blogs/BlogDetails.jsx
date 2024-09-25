import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../ui/button';

const BlogDetails = () => {
    const { id } = useParams();

    const blogs = [
        {
            id: 1,
            date: 'May 4, 2024',
            time: '1 min read',
            author: 'Vinay Singh',
            title: 'React Mindset: How New React Developers Should Think',
            subtitle: 'Assess project type, team skills, and specific requirements. Make an informed decision for optimal scalability and success.',
            image: '/mindSet.avif',
            content: `
            React Mindset: How New React Developers Should Think

When starting with React, it’s crucial to shift your mindset from traditional web development practices to fully embrace the concepts that make React unique and powerful. Understanding this mindset helps in writing cleaner, more efficient code and building scalable, maintainable applications. Here’s a breakdown of the essential aspects that new React developers should consider.

First, think in terms of components. This is the most fundamental concept in React. Rather than thinking about pages or templates, focus on breaking down your UI into smaller, reusable building blocks. Each component represents a specific part of the user interface, like a button, a form, or even a whole section of the page. These components can then be reused throughout your application, making your codebase more organized and manageable. For example, instead of creating multiple buttons with different styles and logic, create a single Button component that accepts properties like label, onClick, and style. This approach allows you to maintain consistency and reuse the Button component wherever it's needed.

State management is another core aspect of React’s functionality. Each component can maintain its own state, but it's essential to keep your state centralized whenever possible. Treat the state as the "single source of truth," meaning all the data your component needs should be derived from the state. This ensures that changes are predictable and can be tracked efficiently. Understand that state changes in React are asynchronous, so avoid trying to read state values immediately after setting them. Instead, rely on the updated state passed down through props or lifecycle methods.

React follows a unidirectional data flow, which means data only moves in one direction: from parent to child. This approach makes data flow easier to trace and debug, as you always know where your data is coming from and where it’s being used. When you update a state in a parent component, the new data flows down to the child components via props. This unidirectional flow ensures that the application's data stays consistent and predictable, making it easier to understand how changes to the state impact the UI.

JSX (JavaScript XML) is a core part of React that allows you to write HTML-like syntax within your JavaScript code. It might feel strange initially, but it’s crucial to understand that JSX is just syntactic sugar for React.createElement and makes your code more readable and easier to understand. Think of JSX as a way to describe how your UI should look based on the state and props. It’s declarative, meaning you specify "what" the UI should look like, and React handles the "how." This makes the UI predictable and easier to manage.

In React, composition is preferred over inheritance. Instead of extending classes to add more functionality, you build components by combining smaller ones. This allows you to create more flexible and reusable components. For instance, instead of having a base Form component that multiple forms inherit from, create smaller components like InputField, Button, or FormWrapper that you can mix and match to create different forms.

React uses a Virtual DOM to efficiently update the UI. Instead of directly manipulating the real DOM (which is slow), React maintains a lightweight copy of it. When the state changes, React updates this virtual DOM first and then efficiently updates only the necessary parts of the real DOM. This makes your application much faster and responsive. As a new developer, don't worry about manually updating the DOM—React handles this for you.

React is just a library, not a full-fledged framework. This means you'll need to adapt to using additional tools and libraries to handle aspects like routing, state management, and side effects. Popular options include React Router for routing, Redux or Context API for state management, and Axios or Fetch for making API calls. Be open to learning these tools as they are often essential in building complete React applications.

Adopting the React mindset means embracing components, state management, unidirectional data flow, and composition. By understanding how these concepts work together, you can leverage React's full potential to create efficient, scalable applications. As a new React developer, remember that React is more than just a library—it’s a different way of thinking about building user interfaces. Once you internalize these principles, you'll find that React’s approach to development offers a more organized, flexible, and powerful way to create modern web applications.
            `
            ,
        },
        {
            id: 2,
            date: 'June 15, 2024',
            time: '2 min read',
            author: 'LalBabu Dubey',
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
        {
            id: 3,
            date: 'sep 30, 2024',
            time: '10 min read',
            author: 'Babu',
            title: 'MERN stack for Web Development',
            subtitle: 'MERN combines MongoDB, Express.js, React.js, and Node.js for full-stack JavaScript development. It streamlines the process of building dynamic web applications, enabling seamless interaction between the front-end and back-end. With a single language throughout, developers can create robust and scalable applications efficiently.',
            image: '/mern.webp',
            content: `
            What is MERN?

            A MERN stack comprises a collection of four frameworks/libraries(MongoDB, ExpressJs, ReactJs and NodeJs) used to develop full-stack javascript solutions for rapid, scalable, and secure applications. Each of these serves a different purpose in creating successful web applications. It is an excellent choice for companies looking to develop high-quality responsive applications quickly using just one language.

Advantages of using MERN

Offers high-performance and customized technologies for the development process.
All of these libraries/frameworks are open-source and have room for designing flexible and scalable applications.
Coding full-stack applications using just one programming language(JavaScript / TypeScript).
Ease of learning the frameworks as they follow similar patterns and support quality collaboration.
High delivery speed and secure code management.
Elements of the MERN stack

Ultimately, both options have their strengths, and the best choice depends on your project’s unique needs and your team’s expertise.
it's important to consider the scalability and maintainability of the project. JavaScript frameworks often excel in handling large-scale applications, thanks to their component-based architecture. This allows developers to break down the application into reusable components, making it easier to manage, test, and scale over time. For example, React’s virtual DOM enhances performance by optimizing updates, while Angular provides a robust structure that supports large teams working on complex applications simultaneously.

In contrast, Laravel's built-in features like Eloquent ORM, migrations, and Blade templating facilitate rapid development and help maintain code quality. This can be particularly beneficial for projects that require frequent updates and iterations. The framework's emphasis on MVC (Model-View-Controller) architecture promotes a clear separation of concerns, making it easier for developers to collaborate and understand the codebase.

MongoDB — It is an open-source document database and a leading NoSQL database. Data is stored in a JSON format called BSON. It is made up of schemas that define the structure of each table in the database. For this stack, the mongoose plugin can be used to build schemas and achieve a secure connection with the backend servers.
ExpressJS — It is a minimal flexible web application framework built over NodeJs which is highly used for backend development by developers, who prefer using JavaScript/TypeScript as their primary programming language. ExpressJs is an open-source framework used for building scalable backend services and RESTful APIs, along with interacting with the database services using plugins such as mongoose.
ReactJs — This is a frontend library used for designing the interface, governing the user experience using the UI/UX guidelines, compiled and tested over decades and handling navigation between screens using the principles of react-navigation and react-router-dom. ReactJs also provides easy integration of npm packages and access to countless components from UI packages such as Ant Design, MUI, React Bootstrap, etc.
NodeJs — It is another open-source framework for server development. It is a JavaScript backend environment that enables developers to write backend services as well as design static web interfaces for services such as email verification, reset passwords, etc. NodeJS supports distributed development and has capabilities to support secure interaction over the network.

            `
            ,
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
            <div>
                <Link to={"/"}>
                    <Button className=" bg-[#159788]  my-7">Back To Home page </Button>
                </Link>
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
