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
    titulo: "Projeto Residencial C&P",
    cliente: "Construtora Menezes",
    localização: "Juazeiro do Norte, Ceará",
    descrição: "Conjunto de projetos para uma casa residencial moderna no condominio Cidades Kariris. Inclui projeto estrutural e projetos complementares.",
    imagens: [
      "https://i.imgur.com/lXqg1Qa.png?2",
      "https://i.imgur.com/lXqg1Qa.png",
      "https://i.imgur.com/v3WgtvQ.png",
      "https://i.imgur.com/yNQ3pZi.png",
      "https://i.imgur.com/uJhn96I.png",
      "https://i.imgur.com/IbCfXYS.png",
      "https://i.imgur.com/gPcFi36.png",
      "https://i.imgur.com/bDwuBsE.png",
      "https://i.imgur.com/6zZBhc3.png",
      "https://i.imgur.com/8vdV497.png",
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
      "https://i.imgur.com/1vhYRTa.png",
      "https://i.imgur.com/3yWTm2n.png",
      "https://i.imgur.com/tcMdl74.png",
      "https://i.imgur.com/ezsvDcM.png",
      "https://i.imgur.com/6OVAE9N.png",
      "https://i.imgur.com/yx5NQ0c.png",
      "https://i.imgur.com/rCkuXjb.png",
      "https://i.imgur.com/MS5fxO8.png",
      "https://i.imgur.com/fuL0VXa.png",
      "https://i.imgur.com/GTPkF7H.png",
      "https://i.imgur.com/KOdV67a.png",
      "https://i.imgur.com/YtMWqnW.png",
      "https://i.imgur.com/vlVgnbc.png",
    ]
  },
  {
    id: 3,
    categoria: "Arquitetônico",
    titulo: "Projeto Residencial A&V",
    cliente: "Familia Lima",
    localização: "Iguatu, Ceará",
    descrição: "Conjunto de projetos para uma casa residencial moderna no municipio de Iguatu. Inclui projeto estrutural e complementares.",
    imagens: [
      "https://i.imgur.com/VJW1DTm.png",
      "https://i.imgur.com/URnkyGL.png",
      "https://i.imgur.com/RANPivv.png",
      "https://i.imgur.com/NdrZCc3.png",
      "https://i.imgur.com/JkPE67U.png",
      "https://i.imgur.com/7Q9htPN.png",
      "https://i.imgur.com/aPyFk0F.png",
      "https://i.imgur.com/a6qEio1.png",
      "https://i.imgur.com/jKnw2ag.png",
    ]
  },
]