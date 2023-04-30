import React, { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { animateUnderline } from "../animations"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function HowItWorks({ className, ...rest }: Props) {
  return (
    <section className={`${className ?? ""}`} {...rest}>
      <h2 className="font-black text-2xl text-slate-700 tracking-tight font-josefin relative">
        Como funciona?
        <motion.i
          {...animateUnderline(1.5, "7rem")}
          className="block h-[2px] left-1 bottom-1 w-28 bg-slate-700 absolute"
        />
      </h2>
      <ul className="text-neutral-600 [&_strong]:text-neutral-800">
        <li className="mb-[4.5rem]">
          <span className="text-base">Cada post possui um prazo para ser encerrado, determinado pelo autor.</span>
          <p className="my-3 text-xs text-neutral-400 py-2 px-4 rounded-full w-fit border-dashed border border-neutral-600">
            <span className="text-xs">Publicado </span>
            <span className="font-semibold">há 7 dias</span> - encerra em{" "}
            <span className="font-semibold inline-block px-1.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-500">
              2 dias
            </span>
          </p>
        </li>
        <li className="mb-[4.5rem]">
          <span className="text-base">Enquanto ativo, seu post será mostrado em um feed similar ao do Facebook.</span>
          <div className="p-3 my-3 font-roboto text-black whitespace-nowrap rounded-xl border border-dashed border-neutral-500">
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
                Sinuca Charme 2,20 X 1,20 estrutura em MDF laqueado, com campo de jogo em Pedra de Ardósia de 20mm
                revestido com tecido acrílico, o que proporciona estabilidade e alta qualidade no nivelamento
              </p>
            </div>
            <div className="mt-3 rounded-lg flex flex-col border border-black overflow-hidden cursor-pointer">
              <div className="flex">
                <img
                  alt="Foto do post"
                  src="https://img.olx.com.br/images/55/552365756456720.jpg"
                  className="object-cover w-full h-72 border-r border-r-neutral-400"
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
                <div className="hidden whitespace-normal sm:flex items-center text-sm">
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
                  <p className="ml-1">3 pessoas já fizeram um lance</p>
                </div>
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
        </li>
        <li className="mb-[4.5rem]">
          <span className="text-base">
            As pessoas poderão entrar na página do post, ver detalhes, ver descrição, ver preço, fazer perguntas, e
            fazer <strong>lances</strong>.
          </span>
          <div className="my-3 p-3 text-black font-roboto rounded-xl border-neutral-500 border border-dashed">
            <div className="flex flex-col gap-2 p-2 px-2">
              <img
                src="https://img.olx.com.br/images/55/552365756456720.jpg"
                alt=""
                className="w-12 cursor-pointer aspect-square bg-neutral-200 object-contain rounded-lg outline-1 outline outline-offset-2 outline-blue-500"
              />
              <div className="pt-6 whitespace-nowrap grow">
                <div className="md:flex hidden justify-between mb-1">
                  <div></div>
                  <div>
                    <p
                      className="h-fit p-1.5 leading-none rounded-lg hover:bg-neutral-200 cursor-pointer"
                      id="radix-:rl:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
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
                <h1 className="text-2xl font-semibold mb-0.5 whitespace-normal">Mesa de Sinuca Charme 2,20 X 1,20</h1>
                <p className="mb-3 text-xs text-neutral-400">
                  <span className="text-xs">Publicado </span>
                  <span className="font-semibold">há 20 dias</span> - encerra em{" "}
                  <span className="font-semibold inline-block px-1.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-500">
                    14 dias
                  </span>
                </p>
                <div>
                  <div className="flex mb-3 flex-col mdx:flex-row">
                    <p className="inline-block mr-4 text-3xl text-black">R$&nbsp;300,00</p>
                    <div className="flex items-end">
                      <p className="text-sm text-neutral-500">ou 12x de R$R$&nbsp;25</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <button
                    className="bg-black py-3 text-white rounded-lg focus:outline-1 focus:outline-offset-1 focus:outline-blue-500 focus:outline-double border border-black undefined"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:rn:"
                    data-state="closed"
                  >
                    Fazer uma proposta
                  </button>
                  <button className="py-3 bg-white border rounded-lg shadow-lg text-neutral-500 border-stone-300">
                    Fazer uma pergunta
                  </button>
                </div>
                <div className="mb-3">
                  <p className="py-1 px-1.5 text-sm rounded-lg bg-red-100 text-black">3 lances no momento</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="mb-[4.5rem]">
          <span className="text-base">
            Um lance é um valor que a pessoa está disposta a pagar por seu produto, pode ser maior ou menor ao valor
            original.
          </span>
          <div className="my-3 p-3 text-black font-roboto rounded-xl border-neutral-500 border border-dashed">
            <div className="rounded-lg bg-white p-6 w-full shadow-lg leading-none">
              <label className="font-semibold block mb-1">Valor do lance</label>
              <div className="w-full bg-white border border-neutral-400 px-3 py-3 rounded-lg focus:outline-1 focus:outline-offset-1 focus:outline-blue-600 focus:outline-double flex gap-2 items-center leading-none mb-4">
                <span className="text-neutral-500">R$</span>
                <input
                  type="number"
                  placeholder="Qual o valor do seu lance?"
                  name="value"
                  step="0.01"
                  className="border-none outline-none w-full h-full"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="py-3 rounded-lg px-5 bg-black text-white flex items-center justify-center"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="py-3 rounded-lg px-5 bg-emerald-500 text-white flex items-center justify-center"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="mb-[4.5rem]">
          <span className="text-base">
            Agora que seu post possui vários lances, você pode escolher quem você deseja premiar como vencedor do
            leilão.
          </span>
          <div className="my-3 p-3 text-black font-roboto rounded-xl border-neutral-500 border border-dashed">
            <div className="flex flex-col gap-2 p-2 bg-white border rounded-lg shadow-lg border-stone-300">
              <div className="flex items-center">
                <img
                  src="https://lh3.googleusercontent.com/a/AGNmyxZGrVBWnD3m01ZMf2coqxIwmUYdI3Ous7A2sZF9_g=s96-c"
                  alt="Foto de perfil de José Vítor"
                  className="w-8 h-8 mr-2 rounded-lg"
                />
                <p className="text-sm text-neutral-800">José Vítor</p>
                <p className="ml-auto mr-2 text-sm font-extrabold">R$&nbsp;450,00</p>
                <div className="p-1 rounded-lg border border-orange-500 border-dashed grid place-items-center">
                  <button className="p-1 leading-none text-white rounded-lg bg-emerald-500">
                    <svg
                      viewBox="0 0 24 24"
                      height="18"
                      width="18"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="StyledIconBase-sc-ea9ulj-0 CipjK"
                    >
                      <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://lh3.googleusercontent.com/a/AGNmyxbySpFBmpxBN60vI6RVOD1MySpkgDmg1qrbsXECgQ=s96-c"
                  alt="Foto de perfil de Trap Nation"
                  className="w-8 h-8 mr-2 rounded-lg"
                />
                <p className="text-sm text-neutral-800">Trap Nation</p>
                <p className="ml-auto mr-2 text-sm">R$&nbsp;345,00</p>
                <div className="p-1 rounded-lg border border-orange-500 border-dashed grid place-items-center">
                  <button className="p-1 leading-none text-white rounded-lg bg-emerald-500">
                    <svg
                      viewBox="0 0 24 24"
                      height="18"
                      width="18"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="StyledIconBase-sc-ea9ulj-0 CipjK"
                    >
                      <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://lh3.googleusercontent.com/a/AGNmyxbNWbjMac7NNivg-_tRtDb8DPoOtnMcP-VTXnWV=s96-c"
                  alt="Foto de perfil de Marcela Campos"
                  className="w-8 h-8 mr-2 rounded-lg"
                />
                <p className="text-sm text-neutral-800">Marcela Campos</p>
                <p className="ml-auto mr-2 text-sm">R$&nbsp;320,00</p>
                <div className="p-1 rounded-lg border border-orange-500 border-dashed grid place-items-center">
                  <button className="p-1 leading-none text-white rounded-lg bg-emerald-500">
                    <svg
                      viewBox="0 0 24 24"
                      height="18"
                      width="18"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="StyledIconBase-sc-ea9ulj-0 CipjK"
                    >
                      <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="mb-[4.5rem]">
          <span className="text-base">
            Caso ninguém seja escolhido por você, ao final do prazo do post, o lance com maior valor é escolhido como
            vencedor do leilão.
          </span>
        </li>
      </ul>
    </section>
  )
}
