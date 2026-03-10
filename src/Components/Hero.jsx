import React  from "react";
import Button from "./Button";
function Main() {
  return (
    <section className="text-center py-20 ">

      <h1 className="text-5xl font-bold text-red-500">
        Hi, I'm a Web Developer
      </h1>

      <p className="mt-4 text-gray-600 text-red-500">
        I build websites using React and Tailwind CSS.
      </p>

      <Button value="View work"/>
    </section>
  );
}

export default Main;