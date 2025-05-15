import Link from "next/link";

export default function SectionContatos() {
  return (
    <section
      id="Contato"
      className="flex h-full w-full flex-col items-center justify-center bg-[#d4e2ff] py-20"
    >
      {/* container */}
      <div className="flex w-full flex-col items-center justify-center gap-8">
        {/* texto */}
        <div className="flex flex-col gap-8 text-center">
          <h1 className="text-6xl font-black uppercase md:text-4xl">
            Estamos ansiosos
            <br />
            para trabalhar com você!
          </h1>

          <p className="text-4xl font-extrabold md:text-2xl">
            Entre em contato conosco hoje mesmo e deixe-nos
            <br />
            ajudá-lo a transformar suas ideias em realidade.
          </p>
        </div>
        {/* botão */}
        <Link href={"/sobre"} className="flex h-full">
          <div className="flex h-full cursor-pointer items-center justify-center rounded-full bg-[#eeaa6b] p-3 px-12 text-center text-2xl font-bold uppercase text-black transition-all ease-in-out hover:bg-[#bb8554]">
            Entre em contato
          </div>
        </Link>

        <div className="flex h-[700px] w-full items-center justify-center gap-5 xl:h-full xl:w-auto xl:flex-col-reverse">
          {/* mapas */}
          <div className="relative flex h-[700px] w-full max-w-[700px] flex-col items-center justify-start overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1176.7271382575277!2d-39.31298331132939!3d-7.238269126610154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a179a12f7c7dff%3A0x8c00433b0e7c34cd!2sEsquare%20Engenharia%20%26%20Projetos!5e0!3m2!1spt-PT!2sbr!4v1710455936055!5m2!1spt-PT!2sbr"
              width="700"
              height="680"
              loading="lazy"
              className="border:0 xl:h-400px shadow-md xl:w-full sm:w-screen"
            ></iframe>
            <Link
              href={"https://www.google.com/maps?ll=-7.23859,-39.313055&z=19&t=m&hl=pt-PT&gl=BR&mapclient=embed&cid=10088137086235063501"}
              className="absolute bottom-0 flex items-center justify-center"
            >
              <div className="flex h-auto w-auto cursor-pointer items-center justify-center rounded-full bg-[#161c33] px-12 py-3 text-center text-2xl font-bold text-[#d9d9d9] transition-all ease-in-out hover:bg-[#263059]">
                Como chegar ao nosso escritório
              </div>
            </Link>
          </div>

          {/* insta */}
          <div className="md relative flex h-[700px] w-full w-full max-w-[700px] flex-col items-center justify-center overflow-hidden">
            {/* <iframe
              src="https://64db68c8e44448a29883dc220f0998cc.elf.site"
              width="700"
              height="796"
              className="-mb-10"
            ></iframe> */}
            <iframe
              src="https://be310cfd84404822a582b8af6450611f.elf.site"
              width="700"
              height="796"
              className="-mb-10 md:w-full"
            ></iframe>
            <Link
              href={"https://www.instagram.com/esquareengenharia/"}
              className="absolute bottom-0 flex items-center justify-center"
            >
              <div className="flex h-auto w-auto cursor-pointer items-center justify-center rounded-full bg-[#161c33] px-12 py-3 text-center text-2xl font-bold text-[#d9d9d9] transition-all ease-in-out hover:bg-[#263059]">
                Nos acompanhe no Instagram
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
