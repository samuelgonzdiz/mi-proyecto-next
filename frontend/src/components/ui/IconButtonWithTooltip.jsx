"use client"

import { cn } from "@/lib/utils"

export default function IconButtonWithTooltip({
    icon: Icon,
    tooltip,
    onClick,
    className,
    size = 40,
}) {
    return (
        <div className="relative group/button_toltip">
            <button
                onClick={onClick}
                className={cn(
                    "p-2 rounded-full bg-white/90 backdrop-blur-md shadow-md hover:bg-white transition flex items-center justify-center cursor-pointer",
                    className
                )}
                style={{ width: size, height: size }}
            >
                <Icon className="w-5 h-5 text-black" />
            </button>

            {tooltip && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 opacity-0 group-hover/button_toltip:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-xl">
                    {tooltip}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-black"
                    ></div>
                </div>
            )}
        </div>
    )
}
