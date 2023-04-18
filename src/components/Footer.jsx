import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
  const links = [
    {
      id: 1,
      child: <BsFillPersonLinesFill size={30} />,
      href: '/resume-FelipePrevelato.pdf',
      download: true,
    },
    {
      id: 2,
      child: <FaLinkedin size={30} />,
      href: 'https://www.linkedin.com/in/felipeprevelato/',
    },
    {
      id: 3,
      child: <FaGithub size={30} />,
      href: 'https://github.com/prevelat',
    },
    {
      id: 4,
      child: <HiOutlineMail size={30} />,
      href: 'mailto:prevelat3@gmail.com',
    },
  ]
  return (
    <footer className="lg:hidden text-white bg-gradient-to-b from-transparent via-black to-black fixed bottom-0 w-full">
      <div className="w-full mx-auto px-12">
        <hr className="my-2 border-gray-200 dark:border-gray-700" />
        <ul className="flex justify-evenly mb-4 text-gray-500 sm:mb-0 dark:text-gray-400">
          {links.map(({ id, child, href, download }) => (
            <li
              key={id}
              className="justify-between md:mb-6 h-5 w-10 text-gray-500"
            >
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
