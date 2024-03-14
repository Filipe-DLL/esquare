'use client'

import * as Tabs from '@radix-ui/react-tabs'

import PageProjetosTabItem from '@/components/PageProjetos/Tabs/PageProjetosTabItem'
import { projectData } from '@/data/projectData'

const tabs: string[] = [
  'Todos',
  'Arquitetônico',
  'Estrutural',
  'Elétrico',
  'Hidrossanitário',
  'Financiamento',
  'PPCI',
]

export default function TabsPageProjetos() {
  return (
    <Tabs.Root
      defaultValue="tab0"
      className="-mb-5 mt-6 h-full w-screen flex-col items-center justify-between "
    >
      <Tabs.List className="mb-6 flex shrink-0 flex-wrap items-center justify-center border-azulIndigo p-2 px-16">
        {
          tabs.map((item, key) => {

            return (
              <Tabs.TabsTrigger
                key={key}
                value={`tab${key}`}
                className="box-content flex h-12 items-center justify-center rounded-2xl px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-black data-[state=active]:text-blue-700 data-[state=active]:focus:border-sky-500"
              >
                {item}
              </Tabs.TabsTrigger>
            )
          }
          )
        }

      </Tabs.List>
      <Tabs.Content
        value="tab0"
        className="flex flex-wrap items-center justify-start"
      >
        {
          projectData.map((item, key) => {
            if (key == 0) {
              return
            }
            return (
              <PageProjetosTabItem imagem={item.categoriaImagen} id={item.id} titulo={item.titulo} key={key} />
            )
          }
          )
        }
      </Tabs.Content>
      <Tabs.Content
        value="tab1"
        className="flex flex-wrap items-center justify-center"
      >
        {
          projectData.map((item, key) => {
            if (item.categoria !== 'Arquitetônico') {
              return
            }
            return (
              <PageProjetosTabItem imagem={item.categoriaImagen} id={item.id} titulo={item.titulo} key={key} />
            )
          }
          )
        }
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="flex flex-wrap items-center justify-center"
      >
        {
          projectData.map((item, key) => {
            if (item.categoria !== 'Estrutural') {
              return
            }
            return (
              <PageProjetosTabItem imagem={item.categoriaImagen} id={item.id} titulo={item.titulo} key={key} />
            )
          }
          )
        }
      </Tabs.Content>
      <Tabs.Content
        value="tab3"
        className="flex flex-wrap items-center justify-center"
      >
        {
          projectData.map((item, key) => {
            if (item.categoria !== 'Elétrico') {
              return
            }
            return (
              <PageProjetosTabItem imagem={item.categoriaImagen} id={item.id} titulo={item.titulo} key={key} />
            )
          }
          )
        }
      </Tabs.Content>
      <Tabs.Content
        value="tab4"
        className="flex flex-wrap items-center justify-center"
      >
        {
          projectData.map((item, key) => {
            if (item.categoria !== 'Hidrossanitário') {
              return
            }
            return (
              <PageProjetosTabItem imagem={item.categoriaImagen} id={item.id} titulo={item.titulo} key={key} />
            )
          }
          )
        }
      </Tabs.Content>
      <Tabs.Content
        value="tab5"
        className="flex flex-wrap items-center justify-center"
      >
        {
          projectData.map((item, key) => {
            if (item.categoria !== 'Orçamento') {
              return
            }
            return (
              <PageProjetosTabItem imagem={item.categoriaImagen} id={item.id} titulo={item.titulo} key={key} />
            )
          }
          )
        }
      </Tabs.Content>
      <Tabs.Content
        value="tab6"
        className="flex flex-wrap items-center justify-center"
      >
        {
          projectData.map((item, key) => {
            if (item.categoria !== 'PPCI') {
              return
            }
            return (
              <PageProjetosTabItem imagem={item.categoriaImagen} id={item.id} titulo={item.titulo} key={key} />
            )
          }
          )
        }
      </Tabs.Content>
    </Tabs.Root>
  )
}
