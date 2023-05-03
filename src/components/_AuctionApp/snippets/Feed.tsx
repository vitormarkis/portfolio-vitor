import React, { HTMLAttributes } from "react"

interface IFeed extends HTMLAttributes<HTMLDivElement> {}

export function Feed({ className, ...rest }: IFeed) {
  return (
    <div className={`${className ?? ""}`} {...rest}>
      <div className="flex">
        <div>
          <img
            alt="Foto de Vitor Markis"
            width="56"
            height="56"
            className="rounded-full shrink-0 object-cover"
            src="/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F121525239%3Fv%3D4&amp;w=128&amp;q=75"
          />
        </div>
        <div className="leading-4 ml-3">
          <p className="text-lg text-neutral-800">Vitor Markis</p>
          <span className="text-sm text-neutral-500">há 20 dias</span>
        </div>
        <div className="ml-auto flex">
          <p className="h-fit p-1.5 leading-none rounded-lg hover:bg-neutral-200 cursor-pointer">
            <svg
              viewBox="0 0 48 48"
              height="24"
              width="24"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="StyledIconBase-sc-ea9ulj-0 CipjK"
            >
              <path d="M15.75 24a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm11.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm8.25 3.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"></path>
            </svg>
          </p>
        </div>
      </div>
      <div className="mt-3 whitespace-normal">
        <p>
          Sinuca Charme 2,20 X 1,20 estrutura em MDF laqueado, com campo de jogo em Pedra de Ardósia de 20mm revestido
          com tecido acrílico, o que proporciona estabilidade e alta qualidade no nivelamento
        </p>
      </div>
      <div className="mt-3 rounded-lg flex flex-col border border-black overflow-hidden cursor-pointer">
        <div className="flex">
          <img
            alt="Foto do post"
            src="https://img.olx.com.br/images/55/552365756456720.jpg"
            className="object-cover w-full border-r border-r-neutral-400"
          />
        </div>
        <div className="p-2 bg-black">
          <h2 className="text-white font-semibold whitespace-normal">Mesa de Sinuca Charme 2,20 X 1,20</h2>
        </div>
        <div className="px-4 py-3 flex items-center">
          <div>
            <span className="font-semibold text-2xl">R$&nbsp;300</span>
          </div>
          <div className="bg-neutral-400 h-5 w-[1px] mx-3"></div>
          <div className="whitespace-normal hidden xs:flex items-center text-sm">
            <p className="mr-1 block xs:hidden md:block mdx:hidden xl:block">3</p>
            <svg
              viewBox="0 0 48 48"
              height="16"
              width="16"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="StyledIconBase-sc-ea9ulj-0 CipjK"
            >
              <path d="M41.56 26.13a1.25 1.25 0 0 0 2.38-.76C43.85 25.1 38.84 10 24 10 9.16 10 4.15 25.1 4.06 25.37c-.21.66.15 1.36.81 1.57.66.21 1.36-.15 1.57-.81.18-.56 4.51-13.63 17.56-13.63 13.05 0 17.38 13.07 17.56 13.63ZM17.5 27a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm6.5-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path>
            </svg>
            <p className="ml-1 hidden sm:block md:hidden lg:block xl:hidden">3 pessoas já fizeram um lance</p>
            <p className="ml-1 hidden xs:block sm:hidden mdx:block lg:hidden">3 lances</p>
          </div>
          <div className="h-5 w-[1px] mr-3 hidden xs:block"></div>
          <div className="ml-auto">
            <a href="/post/mesa-de-sinuca-charme-2-20-x-1-20-4862101538">
              <button className="py-1.5 rounded-lg pr-6 pl-4 bg-black text-white flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  focusable="false"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="StyledIconBase-sc-ea9ulj-0 CipjK"
                >
                  <path d="M11.75 2a2.75 2.75 0 0 1 2.75 2.75v14.5a2.75 2.75 0 1 1-5.5 0V4.75A2.75 2.75 0 0 1 11.75 2Zm7 5a2.75 2.75 0 0 1 2.75 2.75v9.5a2.75 2.75 0 1 1-5.5 0v-9.5A2.75 2.75 0 0 1 18.75 7Zm-14 5a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-5.5 0v-4.5A2.75 2.75 0 0 1 4.75 12Zm7-8.5c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 0 0 2.5 0V4.75c0-.69-.56-1.25-1.25-1.25Zm7 5c-.69 0-1.25.56-1.25 1.25v9.5a1.25 1.25 0 0 0 2.5 0v-9.5c0-.69-.56-1.25-1.25-1.25Zm-14 5c-.69 0-1.25.56-1.25 1.25v4.5a1.25 1.25 0 1 0 2.5 0v-4.5c0-.69-.56-1.25-1.25-1.25Z"></path>
                </svg>
                <p className="ml-2">Ver mais</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
