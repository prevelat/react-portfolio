import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="py-5 w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        <p className="text-xl mt-20">
          I've always enjoyed trying new things. My favorite hobbies are board
          games, sports, cooking and puzzles. Learning how to play a new game
          and then teaching my friends is a blast. Having to think hard and find
          a winning strategy while using as few resources as possible pumps me
          up. I also enjoy trying out new sports or adventuring myself in the
          kitchen.
        </p>

        <br />

        <p className="text-xl">
          My background in engineering and my mind focused on problem-solving
          helped me a lot when I taught myself how to code at 42 School. This
          self-taught, project-based, peer-to-peer learning environment had no
          teachers or classes, but instead was an exotic setting filled with
          people from all over the world with various backgrounds. This
          experience taught me to adapt quickly and work with anyone and
          everyone. It was an amazing experience to live through.
        </p>

        <br />

        <p className="text-xl">
          Now, I'm always seeking to learn new skills, working on new projects,
          and exploring new concepts and technologies. New things keep me
          excited and curious, both in my personal and professional life, I'm
          constantly learning.
        </p>
      </div>
    </div>
  )
}

export default About
