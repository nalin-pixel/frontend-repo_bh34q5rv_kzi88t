import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Story from './components/Story'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      <Navbar />
      <Hero />
      <Collections />
      <Story />
      <Footer />
    </div>
  )
}

export default App
