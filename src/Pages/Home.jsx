import Main from "../Components/Hero";

function Home() {
   useEffect(()=>{
      const title = document. title
      document.title="Home | My Website"
      return()=>{
        document.title=title
      }})
  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;