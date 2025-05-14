import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectData } from "@/data/projectData";
import Image from "next/image";

export default function CarouselHorizontal() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="hidden w-full sm:flex"
    >
      <CarouselContent className="h-[650px] w-full">
        {projectData.slice(1, 4).map((item, key) => (
          <CarouselItem
            key={key}
            className="flex h-full w-auto items-center justify-center rounded-lg shadow-md"
          >
            <div className="flex flex-col items-center justify-center rounded-lg bg-[#fcfbff]">
              <div className="flex w-auto items-center justify-center overflow-hidden bg-cover">
                <Image
                  src={item.imagens[0]}
                  alt=""
                  width={800}
                  height={800}
                  className="h-[300px] w-[500px] overflow-hidden rounded-t-lg bg-cover object-cover"
                />
              </div>

              <div className="flex w-auto flex-col items-start justify-center gap-6 p-4 px-8 2md:p-4">
                <h1 className="text-2xl font-bold 2md:text-xl">
                  <span>{item.titulo}</span>
                </h1>
                <p className="2md:text-sm">
                  <span className="font-semibold">ABRANGÊNCIA: </span>
                </p>
                <p className="2md:text-sm">
                  <span className="font-semibold">ESPECIALIDADE: </span>
                </p>
                <p className="2md:text-sm">
                  <span className="font-semibold">ATUAÇÃO: </span>
                </p>

                <p className="text-base font-medium  lg:text-justify 2md:text-sm">
                  <span className="font-semibold">DESTAQUES: </span>
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
