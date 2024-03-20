import PageProjetosTabItem from '@/components/PageProjetos/Tabs/PageProjetosTabItem'
import { projectData } from '@/data/projectData'

export default function TabsPageProjetos() {
  return (
    <div
      className="mt-5 h-full w-screen flex-col items-center justify-between"
    >
      <div
        className="flex flex-wrap items-center justify-start"
      >
        {
          projectData.map((item, key) => {
            if (key == 0) {
              return
            }
            return (
              <PageProjetosTabItem imagem={item.imagens[0]} id={item.id} titulo={item.titulo} key={key} />
            )
          }
          )
        }
      </div>
      
    </div>
  )
}
