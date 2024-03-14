import Orçamento from '@/assets/SectionServiços/Orçamento.jpg'
import ppci from '@/assets/SectionServiços/Prevenção-e-Combate-a-Incêndio-(PPCI).jpg'
import Elétrico from '@/assets/SectionServiços/Projeto-Elétrico.jpg'
import arquitetônico from '@/assets/SectionServiços/Projeto-arquitetônico.jpg'
import estrutural from '@/assets/SectionServiços/Projeto-estrutural.jpg'
import Hidrossanitário from '@/assets/SectionServiços/Projetos-Hidrossanitário.png'
import { StaticImageData } from 'next/image'

export interface projectDataType {
  id: number,
  categoria: string,
  categoriaImagen: StaticImageData,
  titulo: string,
  cliente: string,
  localização: string
  descrição: string,
  imagens: string[],
}
export const projectData: projectDataType[] = [
  {
    id: 0,
    categoria: "",
    categoriaImagen: arquitetônico,
    titulo: "t",
    cliente: "",
    localização: "",
    descrição: "",
    imagens: []
  },
  {
    id: 0,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Projeto Residencial Moderno",
    cliente: "Família Silva",
    localização: "São Paulo, Brasil",
    descrição: "Projeto arquitetônico para uma casa residencial moderna. Inclui design de interiores, espaços abertos e integração com a natureza.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg",
      "https://i.imgur.com/DE8RfE6.jpg",
      "https://i.imgur.com/x2imWO2.jpg",
      "https://i.imgur.com/KEXcAXl.jpg"
    ]
  },
  {
    id: 1,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Construção de Edifício Comercial",
    cliente: "Empresa ABC",
    localização: "Rio de Janeiro, Brasil",
    descrição: "Projeto de arquitetura e construção para um edifício comercial de múltiplos andares. Inclui áreas de escritório, estacionamento subterrâneo e espaços de varejo.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 2,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Reforma de Casa Histórica",
    cliente: "Museu da Cidade",
    localização: "Lisboa, Portugal",
    descrição: "Projeto de restauração e reforma para uma casa histórica convertida em museu. Preservação de elementos arquitetônicos originais enquanto se adaptam às necessidades modernas.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 3,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Projeto Residencial Sustentável",
    cliente: "Família Oliveira",
    localização: "Curitiba, Brasil",
    descrição: "Projeto arquitetônico para uma casa residencial sustentável. Inclui design eco-friendly, uso de energia renovável e materiais de construção sustentáveis.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 4,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Construção de Centro Comunitário",
    cliente: "Prefeitura Municipal",
    localização: "Salvador, Brasil",
    descrição: "Projeto e construção de um centro comunitário para oferecer serviços sociais à comunidade. Inclui salas multiuso, biblioteca e área de recreação.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 5,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Projeto de Restaurante Urbano",
    cliente: "Empreendedor Local",
    localização: "Nova York, EUA",
    descrição: "Projeto arquitetônico e de design de interiores para um restaurante urbano moderno. Inclui área de jantar, bar e cozinha de conceito aberto.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 6,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Renovação de Espaço de Escritório",
    cliente: "Empresa XYZ",
    localização: "Londres, Reino Unido",
    descrição: "Projeto de renovação e remodelação de um espaço de escritório corporativo. Inclui layout moderno, áreas de colaboração e tecnologia de ponta.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 7,
    categoria: "Estrutural",
    categoriaImagen: estrutural,
    titulo: "Projeto de Ponte Pedonal",
    cliente: "Departamento de Transporte",
    localização: "Toronto, Canadá",
    descrição: "Projeto estrutural para uma ponte pedonal sobre um rio movimentado. Inclui design elegante, materiais duráveis e análise de carga sísmica.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 8,
    categoria: "Estrutural",
    categoriaImagen: estrutural,
    titulo: "Projeto de Edifício Residencial",
    cliente: "Incorporadora ABC",
    localização: "São Paulo, Brasil",
    descrição: "Projeto estrutural para um edifício residencial de vários andares. Inclui análise de cargas, design de fundações e sistemas de suporte.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 9,
    categoria: "Estrutural",
    categoriaImagen: estrutural,
    titulo: "Reforço Estrutural de Ponte",
    cliente: "Departamento de Obras Públicas",
    localização: "Chicago, EUA",
    descrição: "Projeto de reforço estrutural para uma ponte existente. Inclui avaliação de condição, análise de carga e design de reforço para prolongar a vida útil da ponte.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 10,
    categoria: "Estrutural",
    categoriaImagen: estrutural,
    titulo: "Projeto de Estádio de Futebol",
    cliente: "Federação de Futebol Local",
    localização: "Madrid, Espanha",
    descrição: "Projeto estrutural para um estádio de futebol de última geração. Inclui arquibancadas, cobertura retrátil e infraestrutura para eventos.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 11,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Projeto de Instalação Elétrica Industrial",
    cliente: "Empresa de Manufatura XYZ",
    localização: "Pequim, China",
    descrição: "Projeto de instalação elétrica para uma fábrica de manufatura. Inclui distribuição de energia, iluminação e controle de automação.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 12,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Projeto de Iluminação Residencial",
    cliente: "Proprietário Privado",
    localização: "Sydney, Austrália",
    descrição: "Projeto de iluminação residencial para uma casa de luxo. Inclui design de luminárias, controle de iluminação inteligente e efeitos de iluminação.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 13,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Projeto de Rede Elétrica de Telecomunicações",
    cliente: "Empresa de Telecomunicações",
    localização: "Cidade do México, México",
    descrição: "Projeto de rede elétrica para suportar sistemas de telecomunicações em uma área urbana. Inclui distribuição de energia, cabos de fibra óptica e equipamentos de suporte.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 14,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Projeto de Automação Residencial",
    cliente: "Proprietário de Casa",
    localização: "Toronto, Canadá",
    descrição: "Projeto de automação residencial para uma casa inteligente. Inclui controle de iluminação, temperatura, segurança e entretenimento por meio de dispositivos conectados.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 15,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Projeto de Rede Elétrica Industrial",
    cliente: "Empresa de Manufatura ABC",
    localização: "Detroit, EUA",
    descrição: "Projeto de instalação elétrica para uma fábrica de manufatura. Inclui design de distribuição de energia, painéis de controle e sistemas de segurança.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 16,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Projeto de Iluminação Pública",
    cliente: "Prefeitura Municipal",
    localização: "Paris, França",
    descrição: "Projeto de iluminação pública para ruas e praças da cidade. Inclui luminárias LED eficientes, controle de intensidade e design estético.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 17,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Projeto de Rede de Água Potável",
    cliente: "Companhia de Abastecimento de Água",
    localização: "Rio de Janeiro, Brasil",
    descrição: "Projeto de rede de distribuição de água potável para uma região urbana. Inclui análise de demanda, dimensionamento de tubulações e estudo de viabilidade.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 18,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Projeto de Esgoto Sanitário",
    cliente: "Departamento de Saneamento",
    localização: "Lisboa, Portugal",
    descrição: "Projeto de sistema de esgoto sanitário para uma área urbana. Inclui tratamento de resíduos, redes de coleta e estações de bombeamento.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 19,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Projeto de Irrigação Agrícola",
    cliente: "Fazenda Agricultura Familiar",
    localização: "São Paulo, Brasil",
    descrição: "Projeto de sistema de irrigação para uma fazenda agrícola. Inclui pivôs centrais, bombas de água e controle de umidade do solo.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 20,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Projeto de Drenagem Pluvial",
    cliente: "Prefeitura Municipal",
    localização: "Berlim, Alemanha",
    descrição: "Projeto de sistema de drenagem pluvial para uma área urbana. Inclui canais, bueiros e reservatórios de retenção para controle de enchentes.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 21,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Projeto de Tratamento de Água",
    cliente: "Empresa de Tratamento de Água",
    localização: "Tóquio, Japão",
    descrição: "Projeto de estação de tratamento de água para fornecer água potável à cidade. Inclui processos de filtragem, desinfecção e controle de qualidade.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 22,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Projeto de Sistema de Reúso de Água",
    cliente: "Complexo Comercial",
    localização: "Dubai, Emirados Árabes Unidos",
    descrição: "Projeto de sistema de reúso de água para um complexo comercial. Inclui tratamento de água cinza, sistemas de armazenamento e distribuição para uso não potável.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 23,
    categoria: "Orçamento",
    categoriaImagen: Orçamento,
    titulo: "Orçamento para Construção de Residência",
    cliente: "Família Silva",
    localização: "Miami, EUA",
    descrição: "Orçamento detalhado para a construção de uma residência unifamiliar. Inclui custos de materiais, mão de obra e despesas gerais.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 24,
    categoria: "Orçamento",
    categoriaImagen: Orçamento,
    titulo: "Orçamento para Reforma de Escritório",
    cliente: "Empresa XYZ",
    localização: "Londres, Reino Unido",
    descrição: "Orçamento para a renovação e remodelação de um espaço de escritório corporativo. Inclui custos de demolição, materiais de construção e acabamentos.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 25,
    categoria: "PPCI",
    categoriaImagen: ppci,
    titulo: "PPCI Projeto 1",
    cliente: "Cliente PPCI",
    localização: "Localização PPCI",
    descrição: "Descrição do Projeto PPCI",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 26,
    categoria: "PPCI",
    categoriaImagen: ppci,
    titulo: "PPCI Projeto 2",
    cliente: "Cliente PPCI",
    localização: "Localização PPCI",
    descrição: "Descrição do Projeto PPCI",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 27,
    categoria: "PPCI",
    categoriaImagen: ppci,
    titulo: "PPCI Projeto 3",
    cliente: "Cliente PPCI",
    localização: "Localização PPCI",
    descrição: "Descrição do Projeto PPCI",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
]