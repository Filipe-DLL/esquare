import CarouselSize from "@/components/CarouselSize";

export default function SectionProjetos() {
  return (
    <section
      id="Projetos"
      className="flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-[#0e2c88] px-32 sm:p-0"
    >
      {/* Titulo */}
      <h1 className="m-20 flex items-center justify-center self-start text-8xl font-black text-[#526ca7] md:self-center">
        Projetos
      </h1>

      <CarouselSize />
    </section>
  );
}
