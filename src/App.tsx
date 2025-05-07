import { Hero } from './components/sections/Hero/Hero';
import { Experience } from './components/sections/Experience/Experience';
import './styles.css';
import { Skills } from './components/sections/Skills/Skills';

function App() {
  return (
    <div className="min-h-screen">
      <main className="snap-y h-screen overflow-scroll snap-mandatory">
        <div className="snap-start">
          <Hero/>
        </div>
        <div className="snap-start">
          <Experience/>
        </div>
        {/* 技能專長 */}
        <div className="snap-start">
          <Skills/>
        </div>
        {/* 學歷 */}
        <div className="snap-start">
          <h2 className="section-title">學歷</h2>
          <div className="education-item">
            <h3 className="text-xl font-medium">樹德科技大學</h3> 1 
            <p className="text-secondary">行銷管理系 學士 | 2015 - 2019</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
