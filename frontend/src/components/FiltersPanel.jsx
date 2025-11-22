"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

export default function PropertyFilters({ onFilter }) {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [priceRange, setPriceRange] = useState([200000, 1500000]) // Ejemplo

    const handleChange = () => {
        onFilter({
            name,
            address,
            priceMin: priceRange[0],
            priceMax: priceRange[1],
        })
    }

    return (
        <Card className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-xl border border-gray-200 mb-10">
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Filtro por nombre */}
                <div className="flex flex-col gap-2">
                    <Label className="font-semibold text-gray-700">Nombre del inmueble</Label>
                    <Input
                        placeholder="Ej. Casa San Felipe"
                        className="rounded-xl"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            handleChange()
                        }}
                    />
                </div>

                {/* Filtro por ciudad */}
                <div className="flex flex-col gap-2">
                    <Label className="font-semibold text-gray-700">Ciudad</Label>
                    <Input
                        placeholder="Ej. Calle 123 #45"
                        className="rounded-xl"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                            handleChange()
                        }}
                    />
                </div>


                {/* Filtro por dirección */}
                <div className="flex flex-col gap-2">
                    <Label className="font-semibold text-gray-700">Dirección</Label>
                    <Input
                        placeholder="Ej. Calle 123 #45"
                        className="rounded-xl"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                            handleChange()
                        }}
                    />
                </div>

                {/* Rango de precios */}
                <div className="flex flex-col gap-3">
                    <Label className="font-semibold text-gray-700">Rango de precio</Label>

                    <Slider
                        min={0}
                        max={2000000}
                        step={50000}
                        value={priceRange}
                        onValueChange={(value) => {
                            setPriceRange(value)
                            handleChange()
                        }}
                    />

                    <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
