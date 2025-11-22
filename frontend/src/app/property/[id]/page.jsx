'use client';
import { useParams } from 'next/navigation';
import properties from '@/data/properties.json';
import ImageCarouselNavigation from '@/components/ui/ImageCarouselNavigation';
import { Heart, Share2 } from 'lucide-react';
import IconButtonWithTooltip from '@/components/ui/IconButtonWithTooltip';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function PropertyDetail() {
    const { id } = useParams();

    console.log('ID de la propiedad:', typeof id);
    console.log(properties)

    const property = properties.find((p) => p.id === id);


    if (!property) return (
        <div className='w-full h-[calc(100vh-80px)] mt-20 flex flex-col justify-center items-center'>
            <Image
                src="/not-found.png"
                alt="Not Found"
                width={200}
                height={400}
            />
            <h1 className="text-2xl lg:text-3xl font-bold mt-4">Propiedad no encontrada</h1>
            <p className="mt-3 lg:text-lg">La propiedad que buscas no existe.</p>
        </div>
    );

    return (
        <div className=''>
            <div className='container mx-auto p-6 mt-25 mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                    <div className='col-span-12 lg:col-span-8'>
                        <div className='relative'>
                            <Image
                                src={property.image}
                                alt={property.name}
                                width={1920}
                                height={1080}
                                className='object-cover w-full h-100 md:h-120 lg:h-160 rounded-xl'
                            />
                            {/* <img src={property.image} className="object-cover w-full h-100 md:h-120 lg:h-160 rounded-xl" />
                            <ImageCarouselNavigation /> */}
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-4'>
                        <div className='flex justify-end gap-3 items-center mb-4'>
                            {/* FAVORITO */}
                            <IconButtonWithTooltip
                                icon={Heart}
                                onClick={() => console.log("clicked favorito")}
                            />

                            {/* COMPARTIR */}
                            <IconButtonWithTooltip
                                icon={Share2}
                                onClick={() => console.log("clicked compartir")}
                            />
                        </div>
                        <p className="text-3xl lg:text-4xl font-bold font-price text-neutral-700 mt-4 mb-4">
                            ${property.price.toLocaleString("es-CO")}
                        </p>
                        <p className="text-gray-600 text-lg">{property.address} - {property.city}</p>
                        <h1 className="text-2xl lg:text-3xl font-bold mb-4">{property.name}</h1>
                        <p className="mt-3 text-neutral-700">{property.description}</p>

                        <div className="pt-10 flex flex-col gap-3">
                            <Button className="w-full text-base py-3" variant="primary">
                                Contactar Ahora
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
{/* <div className="p-4 mt-20">
            <img src={property.image} className="w-full h-96 object-cover rounded" />
            <h1 className="text-2xl font-bold mt-4">{property.name}</h1>
            <p className="text-gray-600">{property.address}</p>
            <p className="text-xl font-semibold mt-2">
                ${property.price.toLocaleString('es-CO')}
            </p>
            <p className="mt-3">{property.description}</p>
        </div> */}