import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPostItemProps {
  titulo: string;
  descricao: string;
  imagem: StaticImageData;
  data: string;
  categoria: string;
  id: number;
}

export default function BlogPostItem({
  titulo,
  descricao,
  imagem,
  data,
  categoria,
  id,
}: BlogPostItemProps) {
  return (
    <article className="group relative flex h-[480px] w-full max-w-sm flex-col items-center overflow-hidden rounded-2xl bg-[#fcfbff] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden bg-[#d7e0ec]">
        <Image
          src={imagem}
          alt={titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-azulIndigo px-4 py-1.5 text-xs font-semibold text-white shadow-md">
            {categoria}
          </span>
        </div>
      </div>

      <div className="flex h-[calc(100%-224px)] flex-col items-center justify-between p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={14} />
          <span>{data}</span>
        </div>

        <h2 className="line-clamp-2 text-center text-xl font-extrabold leading-tight text-azulIndigo transition-colors group-hover:text-azulPetrolio">
          {titulo}
        </h2>

        <p className="line-clamp-2 text-center text-sm font-medium text-gray-600">
          {descricao}
        </p>

        <Link
          href={`/blog/${id}`}
          className="mt-2 flex items-center gap-1 text-sm font-semibold text-azulIndigo transition-all group-hover:gap-2"
        >
          Leia mais
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
