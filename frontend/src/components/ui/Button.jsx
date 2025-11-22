"use client"
import { cn } from "@/lib/cn"

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  children,
  className,
  ...props
}) {
  const variants = {
    primary: "bg-black text-white",
    primary_outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  }

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
  }

  return (
    <button
      className={cn(
        "rounded-full font-semibold transition-colors cursor-pointer",
        variants[variant],
        sizes[size],
        isLoading && "opacity-50 cursor-wait",
        disabled && "opacity-40 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

/* Button component usage modes */
/* 
<Button>Default</Button>

<Button variant="secondary">Cancelar</Button>

<Button variant="danger" size="lg">
  Eliminar
</Button>

<Button className="w-full">
  Botón Full Width
</Button>
*/
