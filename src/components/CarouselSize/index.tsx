import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectData } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full sm:hidden"
    >
      <CarouselContent className="flex items-center gap-10 px-10">
        {projectData.slice(1, 4).map((item, key) => (
          <CarouselItem
            key={key}
            className="flex max-w-min items-center justify-center "
          >
            <div className="flex items-center justify-center rounded-lg bg-[#fcfbff] shadow-md lg:flex-col">
              <div className="flex w-[500px] items-center justify-center overflow-hidden bg-cover lg:w-auto">
               <Link href={"/projetos"}>

                <Image
                  src={item.imagens[0]}
                  alt=""
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-[500px] w-full overflow-hidden rounded-l-lg bg-cover object-cover lg:max-h-80 lg:w-full lg:rounded-lg"
                  />
                  </Link>
              </div>

              <div className="flex h-80 flex-col items-start justify-center gap-6 p-5">
                <h1 className="text-4xl font-bold">
                  <Link href={"/projetos"}>
                   <span>{item.titulo}
                   </span>
                  </Link>
                </h1>
              {/*  <p>
                  <span className="font-semibold">ABRANGÊNCIA: {item.cliente} </span>
                </p>
                <p>
                  <span className="font-semibold">ESPECIALIDADE: </span>
                </p>
                <p>
                  <span className="font-semibold">ATUAÇÃO: </span>
                </p>*/}

                <p className="w-96 text-2xl font-medium lg:text-justify">
                  <span className="font-semibold"></span>
                  {item.descrição}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

{
  /* <Link href={"/projetos"}>
    <div className="group flex items-center justify-center text-sky-600  ">
        <h3 className="flex cursor-pointer flex-row font-semibold transition-all ease-in-out group-hover:text-sky-500 group-hover:opacity-90">
            Veja mais projetos
        </h3>
        <ArrowRight className="text-sky-600 transition-all ease-in-out group-hover:text-sky-500 group-hover:opacity-90" />
    </div>
 </Link> */
}
