
// const Button = ({value, children}) => {

//   const baseStyle = "px-6 py-2 rounded font-medium transition";

//   const variants = {
//     viewWork: "bg-black text-white hover:bg-gray-800",
//     save: "bg-white text-black border border-black hover:bg-gray-100",
//   };

//   return (
//     <div>
//       <button className={`${baseStyle} ${variants[value]}` }>
//         {children}
//       </button>
//     </div>
//   )
// }

// export default Button


import React from 'react'

const Button = ({identity,children}) => {

  const baseStyle = "px-2 py-1 border rounded text-white"

  const varyColors = {
    saveBtn: "bg-black text-white border-white hover:bg-red-500 hover:border-red-500 hover:text-white transition-all",
    viewWork: "bg-red-500 text-white border-red-500 hover:border-white hover:bg-black transition-all"
  }
  return (
    <div>
      <button className={`${baseStyle} ${varyColors[identity]}`}>
        {children}
      </button>
    </div>
  )
}

export default Button

