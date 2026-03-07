import React  from "react";
function Main() {
  return (
    <section className="text-center py-20 bg-gray-100 ">

      <h1 className="text-5xl font-bold text-red-500">
        Hi, I'm a Web Developer
      </h1>

      <p className="mt-4 text-gray-600 text-red-500">
        I build websites using React and Tailwind CSS.
      </p>

      <button className="mt-6 bg-black text-red-500 px-6 py-3 rounded 
  shadow hover:shadow-lg transition transform duration-500 hover:-translate-y-1">
  View Work
</button>
    </section>
  );
}

export default Main;