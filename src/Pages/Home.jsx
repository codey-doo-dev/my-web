import Main from "../Components/Hero";
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
    </div>
  );
}

export default Home;