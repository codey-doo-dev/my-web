import Main from "../Components/Hero";
import About from "./About";
import { useEffect } from "react";
function Home() {
   useEffect(function () {
     const title = document.title;
     document.title = "Home | My Website";
     return () => {
       document.title = title;
     };
   },[]);
  return (
    <div>
      <Main />
      <About />
    </div>
  );
}

export default Home;