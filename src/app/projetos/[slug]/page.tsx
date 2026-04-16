import Image from "next/image";
import { Metadata } from "next";

import Img from "@/assets/PageProjetos/projetos-page.jpg";
import { projectData } from "@/data/projectData";
import PageProjectDetails from "@/components/PageProjetos/PageProject/PageProjectDetails";

interface ProjectProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: String(project.id),
  }));
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const project = projectData[Number(params.slug)];
  return {
    title: `${project.titulo} | ESQUARE Engenharia`,
    description: project.descrição,
    openGraph: {
      title: project.titulo,
      description: project.descrição,
      images: project.imagens[0] ? [project.imagens[0]] : [],
    },
  };
}

export default async function page({ params }: ProjectProps) {
  const project = projectData[Number(params.slug)];

  return (
    <section className="animate__fadeIn animate__animated flex min-h-screen flex-col items-center justify-start">
      {/* Header */}
      <div className="flex h-80 w-full items-center justify-center overflow-hidden bg-cover">
        <div className="relative overflow-hidden bg-cover">
          <Image
            src={Img}
            alt=""
            width={1920}
            height={320}
            priority
            className="h-80 w-screen overflow-hidden bg-cover object-cover brightness-50"
          />
          <h1 className="absolute left-1/2 top-1/2 h-16 w-3/5 -translate-x-1/2 -translate-y-1/2 transform border-b border-e-gray-100 text-center text-5xl font-semibold capitalize text-gray-50 md:h-auto md:w-11/12 2sm:text-3xl">
            {project.titulo}
          </h1>
        </div>
      </div>

      {/* conteúdo */}
      <PageProjectDetails data={project} />
    </section>
  );
}
