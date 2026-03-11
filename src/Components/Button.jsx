import React from 'react'

const Button = (props) => {
  return (
    <div>
       <button className="mt-6 bg-black text-red-500 px-6 py-3 rounded 
  shadow hover:shadow-lg transition transform duration-500 hover:-translate-y-1">
 {props.value}
</button>
    </div>
  )
}

export default Button
 