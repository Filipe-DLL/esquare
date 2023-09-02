'use client'

import * as Tabs from '@radix-ui/react-tabs'

import Orçamento from '@/assets/SectionServiços/Orçamento.jpg'
import PPCI from '@/assets/SectionServiços/Prevenção-e-Combate-a-Incêndio-(PPCI).jpg'
import Eletrico from '@/assets/SectionServiços/Projeto-Elétrico.jpg'
import Arquitetonico from '@/assets/SectionServiços/Projeto-arquitetônico.jpg'
import Estrutural from '@/assets/SectionServiços/Projeto-estrutural.jpg'
import Hidrossanitário from '@/assets/SectionServiços/Projetos-Hidrossanitário.png'

import ServiçoItemTabs from '@/components/SectionServiços/Tabs/ServiçoItemTabs'

export default function TabsServiço() {
  return (
    <Tabs.Root
      defaultValue="tab1"
      className="mt-4 hidden w-screen flex-col items-center justify-between px-16 2lg:flex"
    >
      <Tabs.List className="flex shrink-0 flex-wrap items-center justify-between border-b-2 border-azulIndigo p-2">
        <Tabs.TabsTrigger
          value="tab1"
          className="box-content flex h-12 w-40 flex-1 items-center justify-center rounded-2xl border-2 border-gray-50 px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-blue-700 data-[state=active]:bg-[#141C61] data-[state=active]:text-gray-50 data-[state=active]:focus:border-sky-500"
        >
          Projeto arquitetônico
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab2"
          className="box-content flex h-12 w-40 flex-1 items-center justify-center rounded-2xl border-2 border-gray-50 px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-blue-700 data-[state=active]:bg-[#141C61] data-[state=active]:text-gray-50 data-[state=active]:focus:border-sky-500"
        >
          Projeto Estrutural
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab3"
          className="box-content flex h-12 w-40 flex-1 items-center justify-center rounded-2xl border-2 border-gray-50 px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-blue-700 data-[state=active]:bg-[#141C61] data-[state=active]:text-gray-50 data-[state=active]:focus:border-sky-500"
        >
          Projeto Elétrico
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab4"
          className="box-content flex h-12 w-40 flex-1 items-center justify-center rounded-2xl border-2 border-gray-50 px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-blue-700 data-[state=active]:bg-[#141C61] data-[state=active]:text-gray-50 data-[state=active]:focus:border-sky-500"
        >
          Projeto Hidrossanitário
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab5"
          className="box-content flex h-12 w-40 flex-1 items-center justify-center rounded-2xl border-2 border-gray-50 px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-blue-700 data-[state=active]:bg-[#141C61] data-[state=active]:text-gray-50 data-[state=active]:focus:border-sky-500"
        >
          Orçamento Para Financiamento
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab6"
          className="box-content flex h-auto w-40 flex-1 items-center justify-center rounded-2xl border-2 border-gray-50 px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-blue-700 data-[state=active]:bg-[#141C61] data-[state=active]:text-gray-50 data-[state=active]:focus:border-sky-500"
        >
          Prevenção e Combate <br />à Incêndio (PPCI)
        </Tabs.TabsTrigger>
      </Tabs.List>
      <Tabs.Content
        value="tab1"
        className="mt-4 flex items-center justify-center  rounded-3xl"
      >
        <ServiçoItemTabs
          titulo="Projeto arquitetônico"
          imagem={Arquitetonico}
        />
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItemTabs titulo="Projeto Estrutural" imagem={Estrutural} />
      </Tabs.Content>
      <Tabs.Content
        value="tab3"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItemTabs titulo="Projeto Elétrico" imagem={Eletrico} />
      </Tabs.Content>
      <Tabs.Content
        value="tab4"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItemTabs
          titulo="Projeto Hidrossanitário"
          imagem={Hidrossanitário}
        />
      </Tabs.Content>
      <Tabs.Content
        value="tab5"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItemTabs
          titulo="Orçamento Para Financiamento"
          imagem={Orçamento}
        />
      </Tabs.Content>
      <Tabs.Content
        value="tab6"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItemTabs
          titulo="Prevenção e Combate à Incêndio (PPCI)"
          imagem={PPCI}
        />
      </Tabs.Content>
    </Tabs.Root>
  )
}
