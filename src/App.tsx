import { Hero } from './components/sections/Hero/Hero';
import { Experience } from './components/sections/Experience/Experience';
import './styles.css';

function App() {
  return (
    <div className="min-h-screen">
      <Hero/>

      <main>
        <Experience/>
        {/* 技能專長 */}
        <section className="section">
          <h2 className="section-title">技能專長</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">前端技術</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Nuxt</span>
                <span className="skill-tag">Vue</span>
                <span className="skill-tag">Tailwind</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">後端技術</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Nest</span>
                <span className="skill-tag">Prisma</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">資料庫</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

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
