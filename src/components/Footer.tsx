import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='h-20 max-w-4xl pt-4 mx-auto font-medium text-white fotter_d sm:mb-8 sm:h-0'> 
      <div className="flex flex-col justify-center mx-4 sm:mx-6 lg:mx-0 md:flex-row md:justify-between">
          <h2 className='text-center sm:text-center'> &copy; {date} Ticket  </h2>
          <a href="https://www.linkedin.com/in/muhindo-galien/" target='_blank'>
            <h4 className='text-center cursor-pointer '>Designed By The Wizard of Hahz </h4>
          </a>
      </div>
    </div>
  )
}

export default Footer
