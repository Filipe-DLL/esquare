import arquitetonico from '@/assets/SectionServiços/arquitetonico.jpg'

import ServiçosPageItem from '@/components/PageServiços/PageServiçosItem'
import ServiçosPageItemReverso from '@/components/PageServiços/PageServiçosItemReverso'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Page() {
  return (
    <div className="animate__fadeIn animate__animated flex h-full flex-col items-center justify-center">
      <WhatsAppButton />

      {/* Container */}
      <ServiçosPageItem
        titulo={'Projeto arquitetônico'}
        imagem={arquitetonico}
        texto={
          'É o primeiro projeto a ser concebido acerca da casa ou do empreendimento requerido. Há a realização de um “breafing” com o cliente para entendermos melhor os seus desejos, suas condições financeiras, o que pode ou não pode ter, e o que deve ou não deve ter no projeto. Além de outros detalhes que podem impactar a concepção do projeto. Após o breafing os projetistas farão toda a parte de modelagem e sempre tendo reuniões quinzenais ou mensais (dependendo do tamanho do projeto) para que o projeto saia da maneira que o cliente deseja. No final é entre as plantas baixas, junto com cortes e fachadas da casa/empreendimento. Há a possibilidade de solicitar projetos mais sofisticados com renderizações e visualizações em vídeo para uma imersão maior diante do projeto que virá a ser construído.'
        }
      />
      <ServiçosPageItemReverso
        titulo={'Projeto estrutural'}
        imagem={arquitetonico}
        texto={
          'Logo após a modelagem do projeto arquitetônico a próxima etapa seria a realização do projeto estrutural, visando a segurança da estrutura que será responsável por (literalmente) suportar a casa/empreendimento. Essa etapa consiste na investigação do solo para obter tanto a composição como a resistência das camadas onde será construída a casa/empreendimento. Obs.O ensaio do solo pode e deve ser realizado antes da concepção do projeto arquitetônico para que se haja uma análise prévia acerca do que pode ou não pode ser construído naquele terreno e como será a fundação. Após a obtenção dos parâmetros do solo é realizada uma análise com auxílio de softwares específicos para o cálculo estrutural visando a verificação das cargas da estrutura em relação ao tipo de fundação escolhida, para evitar problemas futuros, garantir segurança e economia para a construção. '
        }
      />
      <ServiçosPageItem
        titulo={'Projetos Hidrossanitário'}
        imagem={arquitetonico}
        texto={
          'Essa etapa consiste no cálculo e no dimensionamento da parte hidrossanitária e elétrica do projeto. Definindo onde serão os pontos de água, as saídas de esgoto e toda a parte elétrica, entre tomadas e pontos de luz. Além de todo o dimensionamento acerca desses itens para que fique dentro dos parâmetros das normas brasileiras e seja o mais cômodo possível para o projeto que o cliente deseja'
        }
      />
      <ServiçosPageItemReverso
        titulo={'Projeto Elétrico'}
        imagem={arquitetonico}
        texto={
          'Essa etapa consiste no cálculo e no dimensionamento da parte hidrossanitária e elétrica do projeto. Definindo ondeR serão os pontos de água, as saídas de esgoto e toda a parte elétrica, entre tomadas e pontos de luz. Além de todo o dimensionamento acerca desses itens para que fique dentro dos parâmetros das normas brasileiras e seja o mais cômodo possível para o projeto que o cliente deseja'
        }
      />
      <ServiçosPageItem
        titulo={'Prevenção e Combate à Incêndio (PPCI)'}
        imagem={arquitetonico}
        texto={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores consectetur in, est veniam ut. Labore modi voluptatibus laborum soluta vero repellendus animi et ut deserunt, corporis eum delectus dolore!'
        }
      />
      <ServiçosPageItemReverso
        titulo={'Orçamento Caixa'}
        imagem={arquitetonico}
        texto={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque natus voluptates blanditiis reprehenderit laborum, culpa nobis magni quibusdam dolorem harum consequatur officia aliquid laudantium? Excepturi harum illum quasi ipsam?'
        }
      />
    </div>
  )
}
