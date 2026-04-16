import Link from "next/link";

export default function SectionContatos() {
  return (
    <section
      id="Contato"
      className="flex h-full w-full flex-col items-center justify-center bg-[#d4e2ff] py-20"
    >
      {/* container */}
<<<<<<< test
      <div className="flex w-full flex-col items-center justify-center gap-8">
        {/* texto */}
        <div className="flex flex-col gap-8 text-center">
          <h1 className="text-6xl font-black uppercase md:text-4xl">
            Estamos ansiosos
            <br />
            para trabalhar com você!
=======
      <div className=" flex h-full items-center justify-center gap-20 xl:flex-col-reverse">
        {/* mapa */}
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.76671815715434!2d-39.32503369516667!3d-7.22558210744992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a18276c0a9f055%3A0xbae400f36e574d09!2sCentral%20Park%20Comercial!5e0!3m2!1spt-BR!2sbr!4v1776213463086!5m2!1spt-BR!2sbr"
          width="700"
          height="450"
          loading="lazy"
          className="border:0 rounded-3xl shadow-md xl:w-5/6 sm:w-screen sm:rounded-none"
        ></iframe>

        {/* container */}
        <div className="flex h-[28rem] flex-col items-center justify-between gap-10 xl:w-5/6 sm:gap-2">
          {/* Titulo */}
          <h1 className="flex items-center justify-center text-center text-3xl font-black uppercase">
            ENTRE EM CONTATO
>>>>>>> main
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.76671815715434!2d-39.32503369516667!3d-7.22558210744992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a18276c0a9f055%3A0xbae400f36e574d09!2sCentral%20Park%20Comercial!5e0!3m2!1spt-BR!2sbr!4v1776213463086!5m2!1spt-BR!2sbr"
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
          <div className="md relative flex h-[700px] w-full max-w-[700px] flex-col items-center justify-center overflow-hidden">
            <iframe
              src="https://64db68c8e44448a29883dc220f0998cc.elf.site"
              width="700"
              height="796"
              className="-mb-10"
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
