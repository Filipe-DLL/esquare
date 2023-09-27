import Orçamento from '@/assets/SectionServiços/Orçamento.jpg'
import PPCI from '@/assets/SectionServiços/Prevenção-e-Combate-a-Incêndio-(PPCI).jpg'
import Eletrico from '@/assets/SectionServiços/Projeto-Elétrico.jpg'
import Arquitetonico from '@/assets/SectionServiços/Projeto-arquitetônico.jpg'
import Estrutural from '@/assets/SectionServiços/Projeto-estrutural.jpg'
import Hidrossanitário from '@/assets/SectionServiços/Projetos-Hidrossanitário.png'

import ServiçosPageItem from '@/components/PageServiços/PageServiçosItem'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Page() {
  return (
    <div className="animate__fadeIn animate__animated flex h-full min-h-screen flex-col items-center justify-center bg-gray-50">
      <WhatsAppButton />

      <div className="">
        <ServiçosPageItem
          titulo={'Projeto Arquitetônico'}
          imagem={Arquitetonico}
        />
        <div className="flex w-full flex-col items-center justify-center gap-6 p-6 text-black">
          <p className="w-8/12 p-8 text-justify text-lg font-medium leading-relaxed lg:w-11/12 sm:p-0 2sm:text-xs">
            O projeto arquitetônico é o primeiro projeto a ser concebido quando
            se vai construir ou reformar sua casa ou empreendimento. Nele vão
            estar contidas todas as informações acerca dos desejos do cliente,
            do que pode ou não pode ter em seu projeto, além de outros detalhes
            que possam vir a impactar a concepção do projeto.
            <br />
            <br />O projeto arquitetônico abrange várias etapas até a
            apresentação do projeto executivo final, sendo possível prever nele
            problemas de execução e facilitar a mesma, tornando-se essencial
            para a garantia de qualidade e segurança na obra.
          </p>
        </div>
      </div>

      <div className="">
        <ServiçosPageItem titulo={'Projeto Estrutural'} imagem={Estrutural} />
        <div className="flex w-full flex-col items-center justify-center gap-6 p-6 text-black">
          <p className="w-8/12 p-8 text-justify text-lg font-medium leading-relaxed lg:w-11/12 sm:p-0 2sm:text-xs">
            O projeto estrutural é o dimensionamento e detalhamento da estrutura
            necessária para sustentar a edificação, composta por vigas, pilares,
            lajes e fundação. Por meio de critérios e cálculos específicos, e de
            acordo com as normas vigentes, o engenheiro define qual o tipo de
            estrutura mais adequado para o projeto, as dimensões e
            especificações de cada elemento.
            <br />
            <br />É considerado o projeto mais importante de uma construção,
            pois é ele que vai garantir a sustentação da edificação. Além de
            evitar problemas como trincas, rachaduras, rebaixamento de piso,
            etc.
          </p>
        </div>
      </div>

      <div className="">
        <ServiçosPageItem titulo={'Projeto Elétrico'} imagem={Eletrico} />
        <div className="flex w-full flex-col items-center justify-center gap-6 p-6 text-black">
          <p className="w-8/12 p-8 text-justify text-lg font-medium leading-relaxed lg:w-11/12 sm:p-0 2sm:text-xs">
            Um projeto elétrico residencial é o conjunto de todas as
            informações, cálculos, desenhos e detalhes referentes à instalação
            elétrica residencial, observando todas as normas nacionais vigentes.
            Essas informações podem ser um diagrama elétrico, tabela de dados,
            layout, desenhos técnicos, listagem dos componentes da instalação e
            outros.
            <br /> <br />O projeto elétrico se beneficia muito de um projeto
            arquitetônico bem feito. Além de ser extremamente necessário para
            proteção dos equipamentos ligados na casa, desde equipamentos mais
            robustos como ar condicionados, chuveiros elétricos e bombas para
            piscina, até a equipamentos mais simples como computadores,
            equipamentos televisivos e smartphones.
          </p>
        </div>
      </div>

      <div className="">
        <ServiçosPageItem
          titulo={'Projeto Hidrossanitário'}
          imagem={Hidrossanitário}
        />
        <div className="flex w-full flex-col items-center justify-center gap-6 p-6 text-black">
          <p className="w-8/12 p-8 text-justify text-lg font-medium leading-relaxed lg:w-11/12 sm:p-0 2sm:text-xs">
            Um projeto Hidrossanitário é aquele que engloba toda a distribuição
            de água fria, água quente, esgoto e água pluvial ao longo da
            edificação. Ele é essencial para que a água que vem da
            concessionária chegue até as peças de utilização, como chuveiro,
            torneiras, etc. Também é fundamental para que os dejetos eliminados
            pelos ralos e vasos sanitários cheguem até a tubulação de esgoto da
            rua.
            <br /> <br />
            Além da correta distribuição dos equipamentos hidrossanitário que
            levam água da concessionária até os pontos de saída, e levam o
            esgoto até a coleta municipal, o projeto hidrossanitário é
            responsável por evitar problemas nesse tipo de instalação, como
            falta de pressão nos pontos de água fria/quente, entupimento de
            esgoto, mal escoamento de água, etc.
          </p>
        </div>
      </div>

      <div className="">
        <ServiçosPageItem
          titulo={'Prevenção e Combate à Incêndio (PPCI)'}
          imagem={PPCI}
        />
        <div className="flex w-full flex-col items-center justify-center gap-6 p-6 text-black">
          <p className="w-8/12 p-8 text-justify text-lg font-medium leading-relaxed lg:w-11/12 sm:p-0 2sm:text-xs">
            O PPCI (Projeto de Prevenção e Combate a Incêndios) é um documento
            que sistematiza e detalha os elementos necessários a serem previstos
            para garantir a segurança dos ocupantes e auxiliar no combate a
            incêndios. Ele define os espaços e sistemas da edificação para
            evacuar as pessoas de forma rápida em casos de emergência e iniciar
            o combate ao fogo em casos de princípios de incêndio.
            <br /> <br />É necessário, pelas normas brasileiras vigentes, em
            todas as instalações comerciais, industriais, prédios e locais de
            concentração de público, além dos edifícios residenciais
            multifamiliares. O não cumprimento das regulamentações estabelecidas
            pode acarretar multa.
          </p>
        </div>
      </div>

      <div className="">
        <ServiçosPageItem
          titulo={'Orçamento Para Financiamento'}
          imagem={Orçamento}
        />
        <div className="flex w-full flex-col items-center justify-center gap-6 p-6 text-black">
          <p className="w-8/12 p-8 text-justify text-lg font-medium leading-relaxed lg:w-11/12 sm:p-0 2sm:text-xs">
            Para que seja realizado o financiamento nas instituições financeiras
            é necessário o preenchimento de planilhas de orçamento específicas
            dessas instituições. Essas planilhas são diferentes das planilhas
            comumente utilizadas na construção civil em obras privadas. A
            planilha da caixa tem uma série de detalhes que, sem um profissional
            qualificado, vai haver uma certa dificuldade no aceite pela
            instituição, ou até mesmo uma reprovação de financiamento.
            <br /> <br />
            Nós da Esquare temos profissionais experientes neste tipo de serviço
            e fazemos com o maior zelo possível para que seu financiamento saia
            o mais rápido possível.
          </p>
        </div>
      </div>
    </div>
  )
}
