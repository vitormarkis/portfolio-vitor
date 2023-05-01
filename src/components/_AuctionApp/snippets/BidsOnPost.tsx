import React from "react"

export function BidsOnPost() {
  return (
    <>
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
    </>
  )
}
