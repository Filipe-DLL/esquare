import { StaticImageData } from "next/image";

import Ativo1 from "@/assets/SectionBlog/Ativo 1.png";
import Ativo2 from "@/assets/SectionBlog/Ativo 2.png";
import Ativo3 from "@/assets/SectionBlog/Ativo 3.png";

export interface blogPostType {
  id: number;
  titulo: string;
  descricao: string;
  imagem: StaticImageData;
  data: string;
  categoria: string;
}

export const blogData: blogPostType[] = [
  {
    id: 1,
    titulo: "O que são projetos complementares e por que você precisa",
    descricao:
      "Entenda o que são projetos complementares e a sua importância para a execução de obras.",
    imagem: Ativo1,
    data: "15 Mar 2024",
    categoria: "Educação",
  },
  {
    id: 2,
    titulo: "Como evitar retrabalho na obra",
    descricao:
      "Saiba quais medidas podem ser tomadas para evitar retrabalho durante a construção.",
    imagem: Ativo2,
    data: "28 Fev 2024",
    categoria: "Dicas",
  },
  {
    id: 3,
    titulo: "Diferença entre projeto elétrico e cabeamento estruturado",
    descricao:
      "Conheça as principais diferenças entre projeto elétrico e cabeamento estruturado.",
    imagem: Ativo3,
    data: "10 Jan 2024",
    categoria: "Educação",
  },
];
