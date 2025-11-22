'use client';
import Link from 'next/link';
import Button from './ui/Button';
import { Heart, Share2 } from 'lucide-react';
import IconButtonWithTooltip from './ui/IconButtonWithTooltip';
export default function PropertyCard({ prop }) {
    return (
        <Link
            key={prop.id}
            href={`/property/${prop.id}`}
            className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-white"
        >
            {/* Imagen con overlay y botones */}
            <div className="relative overflow-hidden">
                <img
                    src={prop.image}
                    className="w-full h-80 object-cover transition-all group-hover:scale-105 duration-500"
                    alt={prop.name}
                />

                {/* Botones flotantes */}
                <div className="absolute top-4 right-4 flex flex-col gap-3">

                    {/* FAVORITO */}
                    <IconButtonWithTooltip
                        icon={Heart}
                        tooltip="Favorito"
                        onClick={() => console.log("clicked compartir")}
                    />

                    {/* COMPARTIR */}
                    <IconButtonWithTooltip
                        icon={Share2}
                        tooltip="Compartir"
                        onClick={() => console.log("clicked compartir")}
                    />
                </div>

                {/* Overlay degradado inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>

            {/* Contenido */}
            <div className="p-5 space-y-2 bg-neutral-50">
                <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-black">
                    {prop.name}
                </h2>

                <p className="text-neutral-500 text-sm">{prop.address}</p>

                <p className="text-xl font-bold font-price text-neutral-700">
                    ${prop.price.toLocaleString("es-CO")}
                </p>

                <div className="pt-2">
                    <Button className="w-full text-base py-3" variant="primary_outline">
                        Contactar Ahora
                    </Button>
                </div>
            </div>
        </Link>
    );
}