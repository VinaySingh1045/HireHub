import React from 'react'

const Home = () => {
  return (
    <div>
      <section className="bg-hero bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Job Today!</h1>
        <p className="text-lg mb-8">Connecting Talent with Opportunity: Your Gateway to Career Success</p>

        <div className="flex items-center bg-white text-gray-700 rounded-full shadow-lg overflow-hidden max-w-4xl w-full mx-6">
          <input
            type="text"
            placeholder="Job Title or Company"
            className="px-6 py-4 w-full focus:outline-none"
          />
          
          <button className="bg-teal-500 text-white px-8 py-4">Search Job</button>
        </div>

        <div className="flex justify-center space-x-8 mt-10">
          <div className="text-center">
            <div className="text-2xl font-bold">25,850</div>
            <div className="text-gray-300">Jobs</div>
          </div>
          <div className="text-center">
            <div></div>
            <div className="text-2xl font-bold">10,250</div>
            <div className="text-gray-300">Candidates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">18,400</div>
            <div className="text-gray-300">Companies</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
