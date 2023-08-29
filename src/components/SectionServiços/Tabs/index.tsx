'use client'

import * as Tabs from '@radix-ui/react-tabs'

import arquitetonico from '@/assets/SectionServiços/arquitetonico.jpg'
import ServiçoItem from '@/components/SectionServiços/ServiçoItem'

export default function TabsServiço() {
  return (
    <Tabs.Root className="mt-4 hidden w-screen flex-col items-center justify-between px-16 2lg:flex">
      <Tabs.List className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-b border-azulIndigo p-2">
        <Tabs.TabsTrigger
          value="tab1"
          className="flex  h-12 w-40 flex-1 items-center justify-center rounded-sm px-5 text-[15px] leading-none text-azulIndigo outline-none hover:text-blue-700 data-[state=active]:text-blue-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]"
        >
          Projeto arquitetônico
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab2"
          className="flex h-12 w-40 flex-1 items-center justify-center rounded-sm px-5 text-[15px] leading-none text-azulIndigo outline-none hover:text-blue-700 data-[state=active]:text-blue-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]"
        >
          Projeto estrutural
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab3"
          className="data-[state=active]:focus:shadow-[0_0_0_2px]min- flex h-12 w-40 flex-1 items-center justify-center rounded-sm px-5 text-[15px] leading-none text-azulIndigo outline-none hover:text-blue-700 data-[state=active]:text-blue-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
        >
          Projeto Hidrossanitário
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab4"
          className="flex h-12 w-40 flex-1 items-center justify-center rounded-sm px-5 text-[15px] leading-none text-azulIndigo outline-none hover:text-blue-700 data-[state=active]:text-blue-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]"
        >
          Projeto Elétrico
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab5"
          className="flex h-12 w-40 flex-1 items-center justify-center rounded-sm px-5 text-[15px] leading-none text-azulIndigo outline-none hover:text-blue-700 data-[state=active]:text-blue-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]"
        >
          Orçamento Caixa
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab6"
          className="flex h-20 w-40 flex-1 items-center justify-center rounded-sm px-5 text-[15px] leading-none text-azulIndigo outline-none hover:text-blue-700 data-[state=active]:text-blue-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]"
        >
          Prevenção e Combate <br />à Incêndio (PPCI)
        </Tabs.TabsTrigger>
      </Tabs.List>
      <Tabs.Content
        value="tab1"
        className="mt-4 flex items-center justify-center  rounded-3xl"
      >
        <ServiçoItem titulo="Projeto arquitetônico" imagem={arquitetonico} />
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItem titulo="Projeto estrutural" imagem={arquitetonico} />
      </Tabs.Content>
      <Tabs.Content
        value="tab3"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItem titulo="Projeto Hidrossanitário" imagem={arquitetonico} />
      </Tabs.Content>
      <Tabs.Content
        value="tab4"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItem titulo="Projeto Elétrico" imagem={arquitetonico} />
      </Tabs.Content>
      <Tabs.Content
        value="tab5"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItem titulo="Orçamento Caixa" imagem={arquitetonico} />
      </Tabs.Content>
      <Tabs.Content
        value="tab6"
        className="flex items-center justify-center rounded-3xl"
      >
        <ServiçoItem
          titulo="Prevenção e Combate à Incêndio (PPCI)"
          imagem={arquitetonico}
        />
      </Tabs.Content>
    </Tabs.Root>
  )
}
