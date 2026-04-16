import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { blogData } from "@/data/blogData";
import BlogPostItem from "@/components/BlogPostItem";
import HeaderImg from "@/assets/PageProjetos/projetos-page.jpg";

export const metadata: Metadata = {
  title: "Blog | ESQUARE Engenharia",
  description:
    "Leia artigos sobre engenharia, projetos complementares, dicas de construção e muito mais.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <section className="relative h-80 w-full overflow-hidden">
        <Image
          src={HeaderImg}
          alt="Blog"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-azulIndigo/70 via-azulPetrolio/50 to-azulPetrolio/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-200">
            Conhecimento técnico
          </span>
          <h1 className="text-5xl font-bold text-white md:text-6xl">Blog</h1>
          <p className="mt-4 max-w-lg text-lg text-gray-200">
            Artigos sobre engenharia, projetos complementares e construção
          </p>
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#0e2c88] to-[#0a2477] px-8 py-16">
        <div className="mb-12 flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-1 rounded-full bg-white" />
            <h2 className="text-3xl font-bold text-white">Artigos Recentes</h2>
          </div>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
            {blogData.length} artigos
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-8 px-4 pb-4">
          {blogData.map((post) => (
            <BlogPostItem
              key={post.id}
              id={post.id}
              titulo={post.titulo}
              descricao={post.descricao}
              imagem={post.imagem}
              data={post.data}
              categoria={post.categoria}
            />
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/#blog"
            className="group flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:text-azulIndigo"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            Voltar ao início
          </Link>
        </div>
      </section>
    </div>
  );
}
