import React,{useState} from 'react'
import { WiDaySunny } from "react-icons/wi";
import { TiWeatherNight } from "react-icons/ti";

const Navbar = () => {
  const [mode,setMode] = useState(true);

  function toggleMode () {
    setMode(!mode)
  }

  return (
    <div>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Clock</li>
        </ul>
      </div>
      <div>
        <button onClick={toggleMode}>
          {
            mode ? <TiWeatherNight/> : <WiDaySunny/>
          }
        </button>
      </div>
    </div>
  )
}

export default Navbar
