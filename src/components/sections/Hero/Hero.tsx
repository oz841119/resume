import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Section } from '../../widgets/Section/Section';
import { AnchorButton } from '../../widgets/AnchorButton/AnchorButton';

export const Hero = () => {
  return (
    <Section>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
            <img 
              src="/images/headshot.jpg" 
              alt="profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl mb-2">陳奕里</h1>
          <h2 className="text-2xl text-gray-600 mb-6">Eli Chen</h2>
          
          <div className="flex gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/oz841119/" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/oz841119" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg text-gray-700 mb-6">
              在成為軟體工程師前，我從事社群與電商行銷。<br/>然而，在深入數位行銷的過程中，遇見了程式語言。<br/>
              自此，我對軟體開發產生了濃厚興趣，因此成為了軟體工程師。<br/>目前已從事前端開發 3 年。
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <AnchorButton targetId="experience">EXPERIENCE</AnchorButton>
            <AnchorButton targetId="skills">SKILLS</AnchorButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
