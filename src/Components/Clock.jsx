import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date());

 useEffect(() => {
  const timerId = setInterval(() => {
    setDate(new Date());
  }, 1000);

  return () => clearInterval(timerId);
}, []);


  return (
    <section className='max-w-6xl mx-auto py-20 text-center flex flex-col gap-6'>
      <h1 className='text-red-500 font-bold text-4xl'>Clock</h1>
      <p>{date.toLocaleTimeString()}</p>
    </section>
  )
}

export default Clock
