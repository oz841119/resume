import { Section } from "../../widgets/Section/Section";

export const Doing = () => {
  return (
    <Section title="DOING (2025.05.17)" id="doing">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg">
                <span>Side Project - </span>
                <a href="https://github.com/oz841119/peasy-fit3" target="_blank" className="text-blue-500 hover:text-blue-600">Peasy Fit</a>
              </h4>
              <p className="text-gray-600 mt-2">
                開發幫助使用者追蹤重訓進度的應用程式
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg">
                <span>Side Project - </span>
                <a href="https://github.com/oz841119/quiz-mint-ai" target="_blank" className="text-blue-500 hover:text-blue-600">Quiz Mint AI</a>
              </h4>
              <p className="text-gray-600 mt-2">
                開發利用 AI 生成考試題目的 Web 應用
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-lg">AWS Certified Solutions Architect – Associate</h4>
            <p className="text-gray-600 mt-2">
              學習雲端架構設計和服務並考取證照
            </p>
          </div>
          </div>
        </div>
      </div>
    </Section>
  );
};