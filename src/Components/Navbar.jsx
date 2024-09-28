// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className='bg-gray-800 text-white p-4'>
//       <div className='container mx-auto flex justify-between items-center'>
//         <div className='text-2xl font-bold'>
//           <Link to="/">Ankit Kumar</Link>
//         </div>
//         <ul className='flex space-x-6'>
//           <li>
//             <Link to="/" className='hover:text-blue-400'>Home</Link>
//           </li>
//           <li>
//             <Link to="/about" className='hover:text-blue-400'>About</Link>
//           </li>
//           <li>
//             <Link to="/skills" className='hover:text-blue-400'>Skills</Link>
//           </li>
//           <li>
//             <Link to="/projects" className='hover:text-blue-400'>Projects</Link>
//           </li>
//           <li>
//             <Link to="/contact" className='hover:text-blue-400'>Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import profile from '../assets/profile.json'

const NavItem = ({ to, children, delay }) => (
  <li className="w-full">
    <Link 
      to={to} 
      className="block w-[250px]  py-3 text-center text-white bg-gradient-to-r from-indigo-900 to-purple-900 hover:from-indigo-600 hover:to-purple-700 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg animate-fadeIn text-2xl font-extralight ml-8"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Link>
  </li>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <>
      <button 
        onClick={toggleNav} 
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <nav className={`
        fixed inset-0 bg-slate-900 shadow-lg transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:w-80 md:m-10 rounded-2xl
      `}>
        <div className="flex flex-col h-full p-1">
          {/* <h1 className="text-4xl text-center font-bold mt-6 mb-20 text-gray-800 animate-fadeIn md:ml-7">
            Ankit Kumar
          </h1> */}
          <Lottie animationData={profile} className=' h-[200px] md:mb-3'/>
          <ul className="space-y-8 flex-grow">
            <NavItem to="/" delay={100}>Home</NavItem>
            <NavItem to="/about" delay={200}>About</NavItem>
            <NavItem to="/skills" delay={300}>Skills</NavItem>
            <NavItem to="/education" delay={400}>Education</NavItem>
            <NavItem to="/projects" delay={500}>Projects</NavItem>
            <NavItem to="/contact" delay={600}>Contacts</NavItem>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
