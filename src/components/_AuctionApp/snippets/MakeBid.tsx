import React from "react"

export function MakeBid() {
  return (
    <>
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
          <button type="button" className="py-3 rounded-lg px-5 bg-black text-white flex items-center justify-center">
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
    </>
  )
}
