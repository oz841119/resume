import clsx from 'clsx';
import styles from './Hero.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
export const Hero = () => {
    return (
      <section className={clsx(styles.bg, 'w-full h-screen')}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="animate__animated animate__fadeInBottomLeft w-3xl flex h-[530px]">
            <div className={clsx('w-96 bg-slate-400 pt-11 flex flex-col items-center', styles.sw)}>
              <div className="w-48 h-48 rounded-full bg-white mb-8"></div>
              <div className="mb-6 text-center">
                <div className="text-3xl font-medium">陳奕里</div>
                <div className="text-xl">Eli Chen</div>
              </div>
              <div className="w-14 h-0.5 bg-slate-700 mb-6"></div>
              <div className="text-2xl font-extralight">前端工程師</div>
              <div className="h-14 bg-white w-full mt-auto flex justify-center items-center gap-4">
                <a href="https://www.linkedin.com/in/oz841119/" target="_blank"><FaLinkedin size={26} className="text-slate-700" /></a>
                <a href="https://github.com/oz841119" target="_blank"><FaGithub size={26} className="text-slate-700" /></a>
              </div>
            </div>
            <div className="flex-1 pl-6 flex flex-col">
              <div className="pt-12">
                <div className="text-4xl font-extrabold">HI THERE</div>
                <div className="text-2xl">FELL FREE TO CONTACT ME</div>
              </div>
              <div className="mt-auto pb-2 font-light">
                <p className="mb-4">在成為軟體工程師前，我從事社群與電商行銷。</p>
                <p>然而，在深入數位行銷的過程中，遇見了程式語言。自此，我對軟體開發產生了濃厚興趣，
                因此成為了軟體工程師，目前已從事軟體開發 3 年。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
