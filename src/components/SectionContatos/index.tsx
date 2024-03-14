import { Instagram, Mail, PhoneCall } from 'lucide-react'

import Button from '@/components/Button'
import Link from 'next/link'

export default function SectionContatos() {
  return (
    <section
      id="Contato"
      className="mb-20 mt-20 flex h-full w-full flex-col items-center justify-center"
    >
      {/* container */}
      <div className=" flex h-full items-center justify-center gap-20 xl:flex-col-reverse">
        {/* mapa */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31664.92714682257!2d-39.33490889301318!3d-7.227620062991546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a1789b9e348137%3A0x6fac36329d98a8ea!2sJuazeiro%20do%20Norte%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1694808800257!5m2!1spt-BR!2sbr"
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
          </h1>

          {/* Button */}
          <div className="h-14 w-full sm:w-screen sm:rounded-none">
            <Button />
          </div>

          {/* redes */}
          <div className="flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-[#E8EAED] p-10 xl:px-20 sm:w-screen sm:rounded-none sm:p-0 sm:py-3">
            <div className="flex items-center gap-4 sm:flex-col">
              <Mail size={35} />
              <h2 className="text-2xl font-bold sm:text-lg">
                esquareengenharia@gmail.com
              </h2>
            </div>

            <div className="flex items-center gap-4 sm:flex-col">
              <Link
                href={'https://www.instagram.com/esquareengenharia/'}
                className="flex items-center gap-4 sm:flex-col"
              >
                <Instagram size={35} />
                <h2 className="text-2xl font-bold sm:text-lg">
                  @esquareengenharia
                </h2>
              </Link>
            </div>

            <div className="flex items-center gap-4 sm:flex-col">
              <PhoneCall size={35} />
              <h2 className="text-2xl font-bold sm:text-lg">(88) 98888-8888</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
