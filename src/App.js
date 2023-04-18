import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
// import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  // const pages = [
  //   { id: 1, src: NavBar },
  //   { id: 2, src: Home },
  //   { id: 3, src: About },
  //   // { id: 4, src: Portfolio },
  //   { id: 5, src: Experience },
  //   { id: 6, src: Contact },
  //   { id: 7, src: SocialLinks },
  // ]
  return (
    <div>
      <NavBar />
      <div class="flex flex-col">
        {/* {pages.map(({id, src}) => (
        <div key={id}>
          <${src}/>
        </div>
      ))} */}
        <div className="">
          <Home />
        </div>
        <div className="">
          <About />
        </div>
        {/* <div className="min-h-min">
        <Portfolio />
      </div> */}
        <div className="">
          <Experience />
        </div>
        <div className="">
          <Contact />
        </div>
        <div className="">
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default App
