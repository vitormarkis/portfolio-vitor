import React from "react"

export function PublishedEndsIn() {
  return (
    <>
      <span className="text-xs">Publicado </span>
      <span className="font-semibold">há 7 dias</span> - encerra em{" "}
      <span className="font-semibold inline-block px-1.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-500">2 dias</span>
    </>
  )
}
