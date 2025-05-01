import styles from './Experience.module.css'

export const Experience = () => {
    return (
      <section className="px-4 py-12 h-screen bg-slate-500 w-full">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
            EXPERIENCE
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
          </h2>
          <div className={`${styles.scrollContainer} flex-1 overflow-y-auto space-y-8 pr-4`}>
            <div className={styles.timelineItem}>
              <div className={`${styles.experienceCard} bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 relative inline-block">
                  資旅軟體開發有限公司
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </h3>
                <span className="text-sm text-gray-500 mb-4 block">2024.05 - Present</span>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">開發電商後台系統及頁面CMS</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">使用 Next, Typescript, WordPress Theme</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">開發電商管理系統、頁面編輯器</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">程式碼重構</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">敏捷開發</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={`${styles.experienceCard} bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 relative inline-block">
                  盛大資訊股份有限公司
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </h3>
                <span className="text-sm text-gray-500 mb-4 block">2023.10 - 2024.05</span>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">與不同團隊進行各式專案開發，主要負責前端專案</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">使用 Vue3, Nuxt3, Typescript, C#, .NET, MongoDB, WinForm</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">各式鏈道公司內部系統(Web)、保全系統(WinForm)、後端API開發</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">在瀏覽器中串流多路監視器畫面</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={`${styles.experienceCard} bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 relative inline-block">
                  瑞星財經科技
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </h3>
                <span className="text-sm text-gray-500 mb-4 block">2022.07 - 2023.09</span>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">獨立負責Finguider美股資訊網站前端專案</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">引入即時及延時報價</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">全站引導功能</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">文章系統 - 重新開發並優化SEO，改版後三個月SERP曝光量增加兩倍並達增長成長</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">投資組合系統 - 著重用戶操作體驗及複雜圖表、表格</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">策略選股系統 - 複雜圖表、表格</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-110 transition-transform duration-300"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">投資報酬計算器 - 複雜圖表、表格</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}