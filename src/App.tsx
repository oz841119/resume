import { Hero } from './components/sections/Hero/Hero';
import { Experience } from './components/sections/Experience/Experience';
import './styles.css';
import { Skills } from './components/sections/Skills/Skills';

function App() {
  return (
    <div className="min-h-screen">
      <Hero/>

      <main>
        <Experience/>
        {/* 技能專長 */}
        <Skills/>
        {/* 學歷 */}
        <section className="section">
          <h2 className="section-title">學歷</h2>
          <div className="education-item">
            <h3 className="text-xl font-medium">樹德科技大學</h3>
            <p className="text-secondary">行銷管理系 學士 | 2015 - 2019</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
