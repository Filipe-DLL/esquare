'use client'

import * as Tabs from '@radix-ui/react-tabs'

import Orçamento from '@/assets/SectionServiços/Orçamento.jpg'
import PPCI from '@/assets/SectionServiços/Prevenção-e-Combate-a-Incêndio-(PPCI).jpg'
import Eletrico from '@/assets/SectionServiços/Projeto-Elétrico.jpg'
import Arquitetonico from '@/assets/SectionServiços/Projeto-arquitetônico.jpg'
import Estrutural from '@/assets/SectionServiços/Projeto-estrutural.jpg'
import Hidrossanitário from '@/assets/SectionServiços/Projetos-Hidrossanitário.png'

import PageProjetosTabItem from '@/components/PageProjetos/Tabs/PageProjetosTabItem'

export default function TabsPageProjetos() {
  return (
    <Tabs.Root
      defaultValue="tab1"
      className="-mb-20 mt-6 h-full w-screen flex-col items-center justify-between "
    >
      <Tabs.List className="mb-6 flex shrink-0 flex-wrap items-center justify-center border-azulIndigo p-2 px-16">
        <Tabs.TabsTrigger
          value="tab1"
          className="box-content flex h-12 items-center justify-center rounded-2xl px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-black data-[state=active]:text-blue-700 data-[state=active]:focus:border-sky-500"
        >
          Todos
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab2"
          className="box-content flex h-12 items-center justify-center rounded-2xl px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-black data-[state=active]:text-blue-700 data-[state=active]:focus:border-sky-500"
        >
          Arquitetônico
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab3"
          className="box-content flex h-12 items-center justify-center rounded-2xl px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-black data-[state=active]:text-blue-700 data-[state=active]:focus:border-sky-500"
        >
          Estrutural
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab4"
          className="box-content flex h-12 items-center justify-center rounded-2xl px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-black data-[state=active]:text-blue-700 data-[state=active]:focus:border-sky-500"
        >
          Elétrico
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab5"
          className="box-content flex h-12 items-center justify-center rounded-2xl px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-black data-[state=active]:text-blue-700 data-[state=active]:focus:border-sky-500"
        >
          Hidrossanitário
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab6"
          className="box-content flex h-12 items-center justify-center rounded-2xl px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-black data-[state=active]:text-blue-700 data-[state=active]:focus:border-sky-500"
        >
          Financiamento
        </Tabs.TabsTrigger>
        <Tabs.TabsTrigger
          value="tab7"
          className="box-content flex h-auto min-h-[48px] min-w-[165px] items-center justify-center rounded-2xl px-5 text-base font-semibold leading-none text-azulIndigo outline-none transition-all ease-in-out hover:text-black data-[state=active]:text-blue-700 data-[state=active]:focus:border-sky-500"
        >
          Prevenção e Combate <br />à Incêndio (PPCI)
        </Tabs.TabsTrigger>
      </Tabs.List>
      <Tabs.Content
        value="tab1"
        className="flex flex-wrap items-center justify-start"
      >
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />

        <PageProjetosTabItem titulo="Tirulo" imagem={Estrutural} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Estrutural} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Estrutural} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Estrutural} />

        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />

        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />

        <PageProjetosTabItem titulo="Tirulo" imagem={Orçamento} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Orçamento} />

        <PageProjetosTabItem titulo="Tirulo" imagem={PPCI} />
        <PageProjetosTabItem titulo="Tirulo" imagem={PPCI} />
        <PageProjetosTabItem titulo="Tirulo" imagem={PPCI} />
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="flex flex-wrap items-center justify-start"
      >
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Arquitetonico} />
      </Tabs.Content>
      <Tabs.Content
        value="tab3"
        className="flex flex-wrap items-center justify-start"
      >
        <PageProjetosTabItem titulo="Tirulo" imagem={Estrutural} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Estrutural} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Estrutural} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Estrutural} />
      </Tabs.Content>
      <Tabs.Content
        value="tab4"
        className="flex flex-wrap items-center justify-start"
      >
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Eletrico} />
      </Tabs.Content>
      <Tabs.Content
        value="tab5"
        className="flex flex-wrap items-center justify-start"
      >
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Hidrossanitário} />
      </Tabs.Content>
      <Tabs.Content
        value="tab6"
        className="flex flex-wrap items-center justify-start"
      >
        <PageProjetosTabItem titulo="Tirulo" imagem={Orçamento} />
        <PageProjetosTabItem titulo="Tirulo" imagem={Orçamento} />
      </Tabs.Content>
      <Tabs.Content
        value="tab7"
        className="flex flex-wrap items-center justify-start"
      >
        <PageProjetosTabItem titulo="Tirulo" imagem={PPCI} />
        <PageProjetosTabItem titulo="Tirulo" imagem={PPCI} />
        <PageProjetosTabItem titulo="Tirulo" imagem={PPCI} />
      </Tabs.Content>
    </Tabs.Root>
  )
}
