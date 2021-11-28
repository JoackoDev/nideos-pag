import type { NextPage } from 'next'
import Header from './components/Header'
import Title from './components/Title'
import About from './components/About'
import Versions from './components/Versions'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Title />
      <About />
      <Versions />
    </div>
  )
}

export default Home
