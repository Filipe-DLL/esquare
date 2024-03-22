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
      "https://i.imgur.com/YwovFzn.png",
      "https://i.imgur.com/kkxCWWg.png",
      "https://i.imgur.com/0z17rRh.png",
      "https://i.imgur.com/4Dvr509.png",
      "https://i.imgur.com/3ucHt0y.png",
      "https://i.imgur.com/pk3zf41.png",
      "https://i.imgur.com/LucDTeY.png",
      "https://i.imgur.com/quL7Jb8.png",
      "https://i.imgur.com/OZsIuJs.png",
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
      "https://i.imgur.com/9Fx6GZz.png",
      "https://i.imgur.com/OZS2ySC.png",
      "https://i.imgur.com/eq52wFN.png",
      "https://i.imgur.com/qhKgqGg.png",
      "https://i.imgur.com/6wj1o8Y.png",
      "https://i.imgur.com/HFl0rL6.png",
      "https://i.imgur.com/VVSmMWV.png",
      "https://i.imgur.com/rR2kisY.png",
      "https://i.imgur.com/sSl8Dkc.png",
      "https://i.imgur.com/mdwKzaD.png",
      "https://i.imgur.com/iBkl54q.png",
      "https://i.imgur.com/7M1fM6S.png",
      "https://i.imgur.com/INe6pqX.png",
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
      "https://i.imgur.com/lvAjxzy.png",
      "https://i.imgur.com/CDhKao0.png",
      "https://i.imgur.com/e6kiP6f.png",
      "https://i.imgur.com/qWl1cLh.png",
      "https://i.imgur.com/fz05ARu.png",
      "https://i.imgur.com/RteyJ9A.png",
      "https://i.imgur.com/Wk0fH20.png",
      "https://i.imgur.com/kpe7krZ.png",
      "https://i.imgur.com/MLg0Jxt.png",
    ]
  },
]