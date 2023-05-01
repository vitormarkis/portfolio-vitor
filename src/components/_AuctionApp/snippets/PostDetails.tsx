import React from "react"

export function PostDetails() {
  return (
    <>
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
    </>
  )
}
