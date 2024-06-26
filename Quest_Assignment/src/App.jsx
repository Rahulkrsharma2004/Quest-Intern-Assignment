import BeforeFooter from './section/BeforeFooter'
import Body from './section/Body'
import CircleAnimation from './section/CircleAnimation'
import Dynamic from './section/Dynamic'
import Footer from './section/Footer'
import GenerateAi from './section/GenerateAi'
import Hero from './section/Hero'
import Navbar from './section/Navbar'

function App() {

  return (
    <>
      <div>
          <Navbar/>
          <Body/>
          <Hero/>
          <Dynamic/>
          <GenerateAi/>
          <CircleAnimation/>
          <BeforeFooter/>
          <Footer/>
      </div>
    </>
  )
}

export default App
