export interface projectDataType {
  id: number,
  categoria: string,
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
    titulo: "",
    cliente: "",
    localização: "",
    descrição: "",
    imagens: []
  },
  {
    id: 1,
    categoria: "Arquitetônico",
    titulo: "Projeto Residencial C&P ",
    cliente: "Construtora Menezes",
    localização: "Juazeiro do Norte, Ceará",
    descrição: "Conjunto de projetos para uma casa residencial moderna no condominio Cidades Kariris. Inclui projeto estrutural e projetos complementares.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 2,
    categoria: "Arquitetônico",
    titulo: "Projeto Residencial J&L",
    cliente: "Família Silva",
    localização: "Crato, Ceará",
    descrição: "Conjunto de projetos para uma casa residencial moderna no município do Crato. Inclui projeto arquitetônico, projeto estrutural e projetos complementares.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
  {
    id: 3,
    categoria: "Arquitetônico",
    titulo: "Projeto Residencial A&V alfa",
    cliente: "Familia Lima",
    localização: "Iguatu, Ceará",
    descrição: "Conjunto de projetos para uma casa residencial moderna no municipio de Iguatu. Inclui projeto estrutural e complementares.",
    imagens: [
      "https://i.imgur.com/xW02fzc.jpg"
    ]
  },
]