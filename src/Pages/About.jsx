import { useEffect } from "react";
function About() {
 useEffect(() => {
  const title = document.title;
  document.title = "About | My Website";

  return () => {
    document.title = title;
  };
}, []);
  return (
    <div className="max-w-4xl mx-auto py-20 ">

      <h1 className=" text-center text-4xl font-bold mb-6 text-red-600 hover:scale-105 transition">
        About Me
      </h1>

      <p className="text-gray-300 text-lg text-center">
        I am a frontend developer building modern web applications
        with React and Tailwind CSS.
      </p>

    </div>
  );
}

export default About;