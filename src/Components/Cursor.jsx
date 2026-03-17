import { useEffect } from "react";

function Cursor() {

  useEffect(() => {

    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <div className="custom-cursor fixed w-3 h-3 bg-red-500 rounded-full pointer-events-none"></div>
  );
}

export default Cursor;