import React from 'react'

import adonis from '../assets/adonis.png'
import aws from '../assets/aws.png'
import c from '../assets/c.png'
import gcp from '../assets/gcp.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import postgresql from '../assets/postgresql.png'
import python from '../assets/python.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import tensorflow from '../assets/tensorflow.png'
import typescript from '../assets/typescript.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
      to: 'https://www.javascript.com/',
    },
    {
      id: 2,
      src: adonis,
      title: 'AdonisJS',
      style: 'shadow-indigo-600',
      to: 'https://adonisjs.com/',
    },
    {
      id: 13,
      src: node,
      title: 'NodeJs',
      style: 'shadow-lime-600',
      img: '-mb-1',
      to: 'https://nodejs.org/',
    },
    {
      id: 7,
      src: reactImage,
      title: 'React',
      style: 'shadow-cyan-400',
      to: 'https://react.dev/',
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-cyan-500',
      to: 'https://tailwindcss.com/',
    },
    {
      id: 16,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-sky-600',
      to: 'https://www.typescriptlang.org/',
    },
    {
      id: 4,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-400/80',
      to: 'https://www.python.org/',
    },
    {
      id: 10,
      src: tensorflow,
      title: 'Tensorflow',
      style: 'shadow-amber-600',
      img: '-mb-1',
      to: 'https://www.tensorflow.org/',
    },
    {
      id: 3,
      src: c,
      title: 'C',
      style: 'shadow-indigo-800',
      to: 'https://www.w3schools.com/c/c_intro.php',
    },
    {
      id: 5,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
      to: 'https://www.w3schools.com/html/',
    },
    {
      id: 16,
      src: aws,
      title: 'AWS',
      style: 'shadow-amber-500',
      img: 'pt-5 pb-3',
      to: 'https://aws.amazon.com/',
    },
    {
      id: 9,
      src: gcp,
      title: 'Google Cloud Platform',
      style: 'shadow-red-600',
      img: 'w-39 pt-3 pb-2',
      to: 'https://cloud.google.com/',
    },
    {
      id: 11,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
      to: 'https://github.com/',
    },
    {
      id: 12,
      src: mongo,
      title: 'MongoDB',
      style: 'shadow-lime-600',
      to: 'https://www.mongodb.com/',
    },
    {
      id: 15,
      src: postgresql,
      title: 'PostgreSQL',
      style: 'shadow-sky-700',
      img: '-mb-1',
      to: 'https://www.postgresql.org/',
    },
  ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-full h-screen md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto py-5 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, img, to }) => (
            <div key={id}>
              {/* <div                className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style} -pb-1`}              >
                <img                  src={src}                  alt={src}                  to={`${to}`}                  className={`w-20 mx-auto ${img}`}                />
                <p className="mt-4">{title}</p>
              </div> */}
              <div
                className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style} -pb-1`}
              >
                <a href={`${to}`} target="_blank" rel="noreferrer">
                  <img src={src} alt={src} className={`w-20 mx-auto ${img}`} />
                  <p className="mt-4">{title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
