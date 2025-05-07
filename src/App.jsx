import './App.css'
import Header from './header/Header'
import About from './about/About'
import MainContent from './main/MainContent'
import CurvedBackground from './components/curvedBackground'
import Footer from './footer/footer'
import Location from './location/Location'
import Slider from 'react-slick'
import LostItems from './slider/LostItems'

function App() {
 

  return (
      <div dir='rtl' className='app-container'>
      <Header />
      <About />
      <CurvedBackground />
      <MainContent />
      <Location />
      <LostItems />
      <Footer />
      </div>
      
   
  )
}

export default App
