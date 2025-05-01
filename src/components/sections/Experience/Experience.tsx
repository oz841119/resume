import { Job } from "../../widgets/Job/Job"
import { SectionTitle } from "../../widgets/SectionTitle/SectionTitle"

export const Experience = () => {
    return (
      <section className="pt-8 bg-slate-50 py-12 h-screen min-h-[700px]">
        <SectionTitle title="Experience" />
        <div>
          <div className="flex flex-col items-center">
            <Job
              company="資旅軟體開發有限公司"
              title="Frontend Engineer"
              startText="2024.05"
              endText="Present"
              items={[
                "Next、React、Wordpress Theme、Typescript",
                "開發電商管理系統、頁面編輯器、官方網站",
                "程式碼重構"
              ]}
            />
            <Job
              company="盛大資訊股份有限公司"
              title="Frontend Engineer"
              startText="2023.10"
              endText="2024.05"
              items={[
                "Vue3、Nuxt3、Typescript、C#、.NET、MongoDB、WinForm",
                "與不同團隊進行各式專案開發，主要負責前端專案",
                "各式鏈道公司內部系統(Web)、保全系統(WinForm)、後端 API 開發",
                "在瀏覽器中串流多路監視器畫面"
              ]}
            />
            <Job
              company="瑞星財經科技股份有限公司"
              title="Frontend Engineer"
              startText="2022.07"
              endText="2023.09"
              items={[
                "Vue2、Webpack、Nodejs",
                "獨立負責 Finguider 美股資訊網站前端專案",
                "引入即時及延時報價",
                "全站引導功能",
                "文章系統 - 重新開發並優化 SEO，改版後三個月 SERP 曝光量增加兩倍並達增長成長",
                "投資組合、策略選股及投資報酬計算器"
              ]}
            />
          </div>
        </div>
      </section>
    )
}