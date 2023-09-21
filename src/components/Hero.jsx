import React from 'react'

export default function Hero() {
  return (
    <div className='mx-20 my-10 p-10'>
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-start">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-zinc-800">
            Data Analyst
          </h1>
          <p className="text-lg md:text-xl pr-20 mr-20 text-stone-600">
          I am a data analyst with a passion for using data to solve problems. I have 5+ years of experience in the tech industry, and I am proficient in a variety of data analysis tools and technologies.
          </p>
          <ul className="flex space-x-4 text-gray-600 ">
          <li><a href='mailto:pradeepkrishna748@gmail.com'><img src='/email.png' alt='email' className='w-9 py-1'/></a></li>
          <li><a href='https://www.linkedin.com/in/pradeep-krishna-orchu-6494bb28b/'><img src='/linked.png' alt='Linkedin' className='w-10'/></a></li>
          <li><a href='https://www.instagram.com/pradeepassionate/'><img src='/instagram.png' alt='instagram' className='w-10'/></a></li>
          <li><a href='https://wa.me/+919581482777'><img src='/whats.png' alt='Whatsapp' className='w-10'/></a></li>
        </ul>
        </div>
        <img src="/dp.png" alt="Profile"  className='w-1/3 h-auto rounded-full border-solid border-4 border-zinc-600'/>
      </div>
      </div>
    </div>
  )
}
