function Contact() {
  return (
    <div className="max-w-xl mx-auto py-20">

      <h1 className="text-4xl font-bold mb-6 text-red-500">
        Contact
      </h1>

      <form className="flex flex-col gap-4">

        <input className="border p-3 rounded" placeholder="Name" />

        <input className="border p-3 rounded" placeholder="Email" />

        <textarea className="border p-3 rounded" placeholder="Message"></textarea>

        <button className="mt-6 bg-black text-red-500 px-6 py-3 rounded 
  shadow hover:shadow-lg transition transform duration-500 hover:-translate-y-1">
          Send
        </button>

      </form>

    </div>
  );
}

export default Contact;