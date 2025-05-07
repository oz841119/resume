import { Hero } from './components/sections/Hero/Hero';
import { Experience } from './components/sections/Experience/Experience';
import { Skills } from './components/sections/Skills/Skills';
import { Portfolio } from './components/sections/Portfolio/Portfolio';
import { Doing } from './components/sections/Doing/Doing';

function App() {
  return (
    <div className="min-h-screen">
      <main className="snap-y h-screen overflow-scroll snap-mandatory scroll-smooth">
        <div className="snap-start">
          <Hero/>
        </div>
        <div className="snap-start">
          <Experience/>
        </div>
        <div className="snap-start">
          <Skills/>
        </div>
        <div className="snap-start">
          <Portfolio/>
        </div>
        <div className="snap-start">
          <Doing/>
        </div>
      </main>
    </div>
  )
}

export default App
