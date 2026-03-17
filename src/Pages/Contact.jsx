import { useEffect } from "react";
import Button from "../Components/Button";

function Contact() {
  useEffect(() => {
    const title = document.title;
    document.title = "Contact | My Website";

    return () => {
      document.title = title;
    };
  }, []);

  return (
    <div className="max-w-xl mx-auto py-20">

      <h1 className="text-4xl font-bold mb-6 text-red-600 hover:scale-105 transition text-center">
        Contact
      </h1>

      <form className="flex flex-col gap-4 border border-gray-300 p-6 rounded-lg shadow-md">

        <input
          className="border border-gray-300 p-3 rounded text-gray-300"
          placeholder="Name"
        />

        <input
          className="border border-gray-300 p-3 rounded text-gray-300"
          placeholder="Email"
        />

        <textarea
          className="border border-gray-300 p-3 rounded text-gray-300"
          placeholder="Message"
        ></textarea>
        <Button value="save">Save</Button>
        

      </form>

    </div>
  );
}

export default Contact;