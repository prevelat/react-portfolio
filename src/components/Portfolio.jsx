import React from 'react'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: 'WhatsApp bot braval',
    },
    {
      id: 2,
      name: 'reactParallax',
    },
    {
      id: 3,
      name: 'navbar',
    },
    {
      id: 4,
      name: 'reactSmooth',
    },
    {
      id: 5,
      name: 'installNode',
    },
    {
      id: 6,
      name: 'reactWeather',
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-gray-950 to-gray-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">These are some of the projects i've worked on</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div key={name} className="shadow-md shadow-gray-600 rounded-lg">
                {name}
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
