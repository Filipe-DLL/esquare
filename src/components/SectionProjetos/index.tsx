import CarouselSize from "@/components/CarouselSize";
import CarouselHorizontal from "@/components/CarouselSize/CarouselHorizontal";

export default function SectionProjetos() {
  return (
    <section
      id="Projetos"
      className="flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-[#0e2c88] px-32 md:p-12 2md:px-4"
    >
      {/* Titulo */}
      <h1 className="m-20 flex items-center justify-center self-start text-8xl font-black text-[#526ca7] md:self-center">
        Projetos
      </h1>

      <CarouselSize />
      <CarouselHorizontal />
    </section>
  );
}
