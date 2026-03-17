
import Button from "./Button";
function Main() {
  return (
    <section className="text-center py-20  ">

      <h1 className="text-5xl font-bold text-red-500 hover:scale-105 transition">
        Hi, I'm a Frontend Developer
      </h1>
      <br /><br />

      <p className="mt-4 text-lg text-black-500 bold text-gray-300">
        Frontend Developer specializing in modern websites
        using React, Tailwind CSS, and JavaScript.
      </p>

      <p className="mt-2 text-gray-300  bold">
        I build fast, responsive, and user-friendly web applications.
      </p>
      <br /><br />
      <div className="flex items-center justify-center gap-2">
        <Button identity="viewWork">View My Work</Button>
        <Button identity="saveBtn">Save</Button>
      </div>
    </section>
  );
}

export default Main;