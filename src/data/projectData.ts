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
    id: 1,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "ARENA GRÊMIO",
    cliente: "Construtora OAS Ltda.",
    localização: "Porto Alegre – RGS",
    descrição: "Projeto executivo de estruturas de concreto e fundações de arena multiuso. Capacidade máxima 60.540 pessoas. Estruturas predominantemente pré-moldadas com cobertura metálica e fundações moldadas in loco. Área total de 345.250 m².  Área estruturada de 192.500 m² e altura aproximada de 50 m. Volume total de concreto 41.560 m³.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg",
      "https://i.imgur.com/DE8RfE6.jpg",
      "https://i.imgur.com/x2imWO2.jpg",
      "https://i.imgur.com/KEXcAXl.jpg"
    ]
  },
  {
    id: 2,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "tArquitetônico 2",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 3,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Arquitetônico 3",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 4,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Arquitetônico 4",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 5,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Arquitetônico 5",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 6,
    categoria: "Arquitetônico",
    categoriaImagen: arquitetônico,
    titulo: "Arquitetônico 6",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 7,
    categoria: "Estrutural",
    categoriaImagen: estrutural,
    titulo: "Estrutural 1",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 8,
    categoria: "Estrutural",
    categoriaImagen: estrutural,
    titulo: "Estrutural 2",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 9,
    categoria: "Estrutural",
    categoriaImagen: estrutural,
    titulo: "Estrutural 3",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 10,
    categoria: "Estrutural",
    categoriaImagen: estrutural,
    titulo: "Estrutural 4",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 11,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Elétrico 1",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 12,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Elétrico 2",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 13,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Elétrico 3",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 14,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Elétrico 4",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 15,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Elétrico 5",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 16,
    categoria: "Elétrico",
    categoriaImagen: Elétrico,
    titulo: "Elétrico 6",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 17,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Hidrossanitário 1",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 18,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Hidrossanitário 2",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 19,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Hidrossanitário 3",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 20,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Hidrossanitário 4",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 21,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Hidrossanitário 5",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 22,
    categoria: "Hidrossanitário",
    categoriaImagen: Hidrossanitário,
    titulo: "Hidrossanitário 6",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 23,
    categoria: "Orçamento",
    categoriaImagen: Orçamento,
    titulo: "Orçamento Para Financiamento 1",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 24,
    categoria: "Orçamento",
    categoriaImagen: Orçamento,
    titulo: "Orçamento Para Financiamento 2",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 25,
    categoria: "PPCI",
    categoriaImagen: ppci,
    titulo: "Orçamento Para Financiamento 1",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 26,
    categoria: "PPCI",
    categoriaImagen: ppci,
    titulo: "Orçamento Para Financiamento 2",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 27,
    categoria: "PPCI",
    categoriaImagen: ppci,
    titulo: "Orçamento Para Financiamento 3",
    cliente: "Cliente",
    localização: "Localização",
    descrição: "Descrição do Item",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
]