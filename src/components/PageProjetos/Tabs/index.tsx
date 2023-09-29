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
      className="-mb-5 mt-6 h-full w-screen flex-col items-center justify-between "
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
        <PageProjetosTabItem imagem={Arquitetonico} id={1} titulo="Titulo 1" />
        <PageProjetosTabItem imagem={Arquitetonico} id={2} titulo="Titulo 2" />
        <PageProjetosTabItem imagem={Arquitetonico} id={3} titulo="Titulo 3" />
        <PageProjetosTabItem imagem={Arquitetonico} id={4} titulo="Titulo 4" />
        <PageProjetosTabItem imagem={Arquitetonico} id={5} titulo="Titulo 5" />
        <PageProjetosTabItem imagem={Arquitetonico} id={6} titulo="Titulo 6" />

        <PageProjetosTabItem imagem={Estrutural} id={7} titulo="Titulo 7" />
        <PageProjetosTabItem imagem={Estrutural} id={8} titulo="Titulo 8" />
        <PageProjetosTabItem imagem={Estrutural} id={9} titulo="Titulo 9" />
        <PageProjetosTabItem imagem={Estrutural} id={10} titulo="Titulo 10" />

        <PageProjetosTabItem imagem={Eletrico} id={11} titulo="Titulo 11" />
        <PageProjetosTabItem imagem={Eletrico} id={12} titulo="Titulo 12" />
        <PageProjetosTabItem imagem={Eletrico} id={13} titulo="Titulo 13" />
        <PageProjetosTabItem imagem={Eletrico} id={14} titulo="Titulo 14" />
        <PageProjetosTabItem imagem={Eletrico} id={15} titulo="Titulo 15" />
        <PageProjetosTabItem imagem={Eletrico} id={16} titulo="Titulo 16" />

        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={17}
          titulo="Titulo 17"
        />
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={18}
          titulo="Titulo 18"
        />
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={19}
          titulo="Titulo 19"
        />
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={20}
          titulo="Titulo 20"
        />
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={21}
          titulo="Titulo 21"
        />

        <PageProjetosTabItem imagem={Orçamento} id={22} titulo="Titulo 22" />
        <PageProjetosTabItem imagem={Orçamento} id={23} titulo="Titulo 23" />

        <PageProjetosTabItem imagem={PPCI} id={24} titulo="Titulo 24" />
        <PageProjetosTabItem imagem={PPCI} id={25} titulo="Titulo 25" />
        <PageProjetosTabItem imagem={PPCI} id={26} titulo="Titulo 26" />
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="flex flex-wrap items-center justify-center"
      >
        <PageProjetosTabItem imagem={Arquitetonico} id={1} titulo="Titulo 1" />
        <PageProjetosTabItem imagem={Arquitetonico} id={2} titulo="Titulo 2" />
        <PageProjetosTabItem imagem={Arquitetonico} id={3} titulo="Titulo 3" />
        <PageProjetosTabItem imagem={Arquitetonico} id={4} titulo="Titulo 4" />
        <PageProjetosTabItem imagem={Arquitetonico} id={5} titulo="Titulo 5" />
        <PageProjetosTabItem imagem={Arquitetonico} id={6} titulo="Titulo 6" />
      </Tabs.Content>
      <Tabs.Content
        value="tab3"
        className="flex flex-wrap items-center justify-center"
      >
        <PageProjetosTabItem imagem={Estrutural} id={7} titulo="Titulo 7" />
        <PageProjetosTabItem imagem={Estrutural} id={8} titulo="Titulo 8" />
        <PageProjetosTabItem imagem={Estrutural} id={9} titulo="Titulo 9" />
        <PageProjetosTabItem imagem={Estrutural} id={10} titulo="Titulo 10" />
      </Tabs.Content>
      <Tabs.Content
        value="tab4"
        className="flex flex-wrap items-center justify-center"
      >
        <PageProjetosTabItem imagem={Eletrico} id={11} titulo="Titulo 11" />
        <PageProjetosTabItem imagem={Eletrico} id={12} titulo="Titulo 12" />
        <PageProjetosTabItem imagem={Eletrico} id={13} titulo="Titulo 13" />
        <PageProjetosTabItem imagem={Eletrico} id={14} titulo="Titulo 14" />
        <PageProjetosTabItem imagem={Eletrico} id={15} titulo="Titulo 15" />
        <PageProjetosTabItem imagem={Eletrico} id={16} titulo="Titulo 16" />
      </Tabs.Content>
      <Tabs.Content
        value="tab5"
        className="flex flex-wrap items-center justify-center"
      >
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={17}
          titulo="Titulo 17"
        />
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={18}
          titulo="Titulo 18"
        />
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={19}
          titulo="Titulo 19"
        />
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={20}
          titulo="Titulo 20"
        />
        <PageProjetosTabItem
          imagem={Hidrossanitário}
          id={21}
          titulo="Titulo 21"
        />
      </Tabs.Content>
      <Tabs.Content
        value="tab6"
        className="flex flex-wrap items-center justify-center"
      >
        <PageProjetosTabItem imagem={Orçamento} id={22} titulo="Titulo 22" />
        <PageProjetosTabItem imagem={Orçamento} id={23} titulo="Titulo 23" />
      </Tabs.Content>
      <Tabs.Content
        value="tab7"
        className="flex flex-wrap items-center justify-center"
      >
        <PageProjetosTabItem imagem={PPCI} id={24} titulo="Titulo 24" />
        <PageProjetosTabItem imagem={PPCI} id={25} titulo="Titulo 25" />
        <PageProjetosTabItem imagem={PPCI} id={26} titulo="Titulo 26" />
      </Tabs.Content>
    </Tabs.Root>
  )
}
