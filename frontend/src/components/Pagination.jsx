"use client"

import { cn } from "@/lib/utils"

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}) {
  if (totalPages <= 1) return null

  // --- Helpers ---
  const pages = []

  const addPage = (page) => {
    pages.push({
      type: "page",
      number: page,
      active: page === currentPage,
    })
  }

  const addDots = () => pages.push({ type: "dots" })

  // --- Lógica principal ---
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) addPage(i)
  } else {
    addPage(1)

    if (currentPage > 4) addDots()

    const start = Math.max(2, currentPage - 2)
    const end = Math.min(totalPages - 1, currentPage + 2)

    for (let i = start; i <= end; i++) addPage(i)

    if (currentPage < totalPages - 3) addDots()

    addPage(totalPages)
  }

  // --- Render ---
  return (
    <nav
      aria-label="Paginación"
      className="flex items-center justify-center gap-3 py-10 select-none"
    >
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className={cn(
          "px-4 py-2 rounded-full border transition flex items-center gap-1",
          "border-neutral-300 text-neutral-700 hover:bg-neutral-100",
          "disabled:opacity-40 disabled:cursor-not-allowed"
        )}
      >
        ← Anterior
      </button>

      {/* Pages */}
      <ul className="flex items-center gap-2">
        {pages.map((item, i) =>
          item.type === "dots" ? (
            <li key={i} className="text-neutral-400 px-2">···</li>
          ) : (
            <li key={i}>
              <button
                onClick={() => onPageChange(item.number)}
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full transition",
                  item.active
                    ? "bg-black text-white shadow-md scale-105"
                    : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                )}
              >
                {item.number}
              </button>
            </li>
          )
        )}
      </ul>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
        className={cn(
          "px-4 py-2 rounded-full border transition flex items-center gap-1",
          "border-neutral-300 text-neutral-700 hover:bg-neutral-100",
          "disabled:opacity-40 disabled:cursor-not-allowed"
        )}
      >
        Siguiente →
      </button>
    </nav>
  )
}
