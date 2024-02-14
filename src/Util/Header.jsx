import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (<div>
         <header className='border h-14 flex justify-evenly items-center'>
              <div>
                     <Link to={"/Home"}>
                     <a href=""><img src="src/images/logo.jpg" alt="LOGO"  className='h-12 w-32'/></a>
                     </Link>
              </div>
              <div className='box-border border-black'>
                <input type="text" placeholder='search for products, catagiries, etc....' className='w-96 h-6 bg-blue-100 text-black border-black p-2 rounded-md' />
              </div>
              <div className='flex gap-8 font-extrabold '>
              <Link to={"/"}>
              <a href="">LogIn</a>
              </Link>
              <Link to={"/"}>
              <a href="">Become a Seller</a>
              </Link >
              <Link to={"/ "}>
              <a href="">Cart</a>
              </Link>
              </div>  
      </header>
    </div>
    
  )
}

export default Header