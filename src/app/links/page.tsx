// src/app/links/page.tsx
import React from "react";
import Image from "next/image";

import logo from "@/assets/links/LOGOTIPO AZUL - TRADICIONAL .png";

export default function LinksPage() {
  return (
    <div className="flex min-h-[90vh] flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
          {/* Foto de Perfil */}
          <div className="relative mx-auto mb-4 h-28 w-32">
            <Image
              src={logo}
              alt="Foto de Perfil"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-azulIndigo">
            @esquareengenharia
          </h1>
          <p className="mb-6 text-gray-700">
            Bem-vindo! Aqui você encontra todos os links e redes sociais.
          </p>
          {/* Botões de Link */}
          <div className="space-y-4">
            <a
              href="https://www.instagram.com/esquareengenharia/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-azulIndigo py-3 text-white transition-colors hover:bg-blue-900"
            >
              Instagram
            </a>
            <a
              href="https://www.esquareengenharia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-azulIndigo py-3 text-white transition-colors hover:bg-blue-900"
            >
              Meu Site
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5588981861972"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-azulIndigo py-3 text-white transition-colors hover:bg-blue-900"
            >
              WhatApp
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
