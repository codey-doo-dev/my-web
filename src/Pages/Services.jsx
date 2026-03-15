import React, { useEffect } from 'react'

const Services = () => {
  useEffect(()=>{
    const title = document. title
    document.title="Services | My Website"
    return()=>{
      document.title=title
    }
  },[]); 
  return (
    <div>
      <div className="max-w-6xl mx-auto py-20">

      <h1 className="text-4xl font-bold text-center mb-10 text-red-500">
        Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border p-6 rounded hover:shadow-lg">
          <h2 className="text-xl font-bold">Web Design</h2>
          <p className="text-gray-600">Modern responsive designs.</p>
        </div>

        <div className="border p-6 rounded hover:shadow-lg">
          <h2 className="text-xl font-bold">Frontend Development</h2>
          <p className="text-gray-600">React & Tailwind projects.</p>
        </div>

        <div className="border p-6 rounded hover:shadow-lg">
          <h2 className="text-xl font-bold">UI Design</h2>
          <p className="text-gray-600">Clean interface design.</p>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Services
