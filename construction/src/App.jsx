import React from 'react'
import About from './About'
import Home from './Home'

const App = () => {
  return (
    <div className='w-full'>
    <div className='relative w-full h-screen'>
      <img className='h-screen min-w-full opacity-65 md:opacity-65' src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
          <nav className='absolute top-0 w-full p-8 flex justify-end gap-8 text-white font-bold text-lg z-10'>
          <button className='hover:text-orange-500 transition-colors'>Home</button>
          <button className='hover:text-orange-500 transition-colors'>About</button>
          <button className='hover:text-orange-500 transition-colors'>Contact us</button>
        </nav>
        <div className='absolute top-40 left-20 z-10'>
        <h1 className=' text-orange-500 text-6xl font-bold left-20 text-left'>Do you want to make your<br/>dream home a reality?</h1>   
          <Home/>
      <button className='border-4 text-3xl border-orange-500 rounded-2xl bg-white hover:bg-gray-300 p-1 mt-6'>Contact Me</button>
      </div>
      </div >
        <About/>
      </div>
    )
}

export default App
