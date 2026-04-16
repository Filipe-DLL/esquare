import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import { blogData } from "@/data/blogData";
import HeaderImg from "@/assets/PageProjetos/projetos-page.jpg";

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    id: String(post.id),
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = blogData.find((p) => p.id === Number(params.id));

  if (!post) {
    return {
      title: "Post não encontrado | ESQUARE Engenharia",
    };
  }

  return {
    title: `${post.titulo} | ESQUARE Blog`,
    description: post.descricao,
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = blogData.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800">
          Post não encontrado
        </h1>
        <Link href="/blog" className="mt-4 text-azulIndigo hover:underline">
          Voltar ao blog
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-50">
      <section className="relative h-80 w-full overflow-hidden">
        <Image
          src={HeaderImg}
          alt={post.titulo}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-azulIndigo/70 via-azulPetrolio/50 to-azulPetrolio/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
              {post.categoria}
            </span>
          </div>
          <h1 className="max-w-3xl px-4 text-3xl font-bold text-white md:text-5xl">
            {post.titulo}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-8">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.data}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />5 min de leitura
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Compartilhar:</span>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=https://esquareengenharia.com.br/blog/${post.id}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:scale-110"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href={`https://www.instagram.com/`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white transition-transform hover:scale-110"
            >
              <Instagram size={16} />
            </Link>
            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://esquareengenharia.com.br/blog/${post.id}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white transition-transform hover:scale-110"
            >
              <Linkedin size={16} />
            </Link>
          </div>
        </div>

        <div className="relative mb-8 h-80 w-full overflow-hidden rounded-2xl">
          <Image
            src={post.imagem}
            alt={post.titulo}
            fill
            className="object-contain"
          />
        </div>

        <h1 className="font-extrabold text-7xl flex items-center justify-center">Em Construção</h1>


   {/*     <div className="prose prose-lg mx-auto">
          <p className="text-xl leading-relaxed text-gray-700">
            {post.descricao}
          </p>

          <h2 className="mt-10 text-2xl font-bold text-azulIndigo">
            O que são projetos complementares?
          </h2>
          <p className="mt-4 text-gray-600">
            Projetos complementares são aqueles que complementam o projeto
            arquitetônico principal, garantindo que todas as instalações de uma
            edificação funcionem de forma integrada e eficiente. Eles são
            essenciais para a execução de obras com qualidade e segurança.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-azulIndigo">
            Por que você precisa?
          </h2>
          <p className="mt-4 text-gray-600">
            A ausência de projetos complementares pode gerar retrabalho, aumento
            de custos e, principalmente, problemas de segurança. Com a ESQUARE,
            você garante que todos os detalhes sejam considerados desde o início
            do processo.
          </p>

          <blockquote className="my-10 border-l-4 border-azulIndigo bg-gray-100 p-6 italic text-gray-700">
            &ldquo;A compatibilização de projetos é o segredo para uma obra sem
            problemas. Quando todos os sistemas são planejados em conjunto, o
            resultado é excelência.&rdquo;
          </blockquote>

          <h2 className="mt-10 text-2xl font-bold text-azulIndigo">
            Conclusão
          </h2>
          <p className="mt-4 text-gray-600">
            Investir em projetos complementares é investir na qualidade e
            segurança da sua obra. A ESQUARE Engenharia está pronta para
            ajudá-lo a transformar seu projeto em realidade.
          </p>
        </div>

        */}

        <div className="mt-16 rounded-2xl bg-azulIndigo p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">Precisa de um projeto?</h3>
          <p className="mb-6 text-gray-200">
            Entre em contato conosco e solicite um orçamento sem compromisso.
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=5588981861972"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-azulIndigo transition-all hover:scale-105"
          >
            Fale conosco
          </Link>
        </div>

        <div className="mt-12">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-azulIndigo transition-all hover:gap-3"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            Voltar para o Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
