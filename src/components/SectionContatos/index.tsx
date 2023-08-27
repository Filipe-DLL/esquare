import { Instagram, Mail, PhoneCall } from 'lucide-react'

import Button from '@/components/Button'

export default function SectionContatos() {
  return (
    <section
      id="Contato"
      className="flex h-full w-full flex-col items-center justify-center"
    >
      {/* container */}
      <div className="mt-20 flex h-full items-center justify-center gap-20 xl:flex-wrap-reverse">
        {/* mapa */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.194717898325!2d-39.30851003959099!3d-6.7943332341484854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a3b360519ce17f%3A0x988c1c99f6dfc0ce!2sV%C3%A1rzea%20Alegre%2C%20CE%2C%2063540-000!5e0!3m2!1spt-BR!2sbr!4v1692402498050!5m2!1spt-BR!2sbr"
          width="700"
          height="450"
          loading="lazy"
          className="border:0 rounded-3xl shadow-md xl:w-5/6 sm:w-screen"
        ></iframe>

        {/* container */}
        <div className="flex h-[28rem] flex-col items-center justify-between gap-10 xl:w-5/6">
          {/* Titulo */}
          <h1 className="flex items-center justify-center text-3xl font-black uppercase">
            ENTRE EM CONTATO
          </h1>

          {/* Button */}
          <div className="h-14 w-full">
            <Button />
          </div>

          {/* redes */}
          <div className="flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-[#E8EAED] p-10 sm:w-screen">
            <div className="flex items-center gap-4">
              <Mail size={35} />
              <h2 className="text-2xl font-bold">
                esquareengenharia@gmail.com
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <Instagram size={35} />
              <h2 className="text-2xl font-bold">@esquareengenharia</h2>
            </div>

            <div className="flex items-center gap-4">
              <PhoneCall size={35} />
              <h2 className="text-2xl font-bold">(88) 98888-8888</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
