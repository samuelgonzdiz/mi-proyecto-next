'use client';
import { useEffect, useState } from 'react';

import properties from '@/data/properties.json';
import PropertyCard from '@/components/PropertyCard';
import Pagination from '@/components/Pagination';
import PropertyFilters from '@/components/FiltersPanel';

export default function PropertyListPage() {

  /* Paginaciónprobamos el codigo */
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/saludo`);
      const data = await res.json();
      setInfo(data.msg);
    };

    fetchData();
  }, []);

  const [page, setPage] = useState(12)  // página actual

  const handleFilters = (filters) => {
    console.log("Filtros aplicados:", filters)
    // Aquí llamas tu API o actualizas estado
  }

  return (
    <div className="container mx-auto p-6 mt-20 mb-20">
      <h1 className="text-3xl font-bold mb-10">Propiedades disponibles - {info}</h1>

      <PropertyFilters className="mb-10" onFilter={handleFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} prop={property} />
        ))}
      </div>

      {/* Paginación */}
      <Pagination
        totalPages={12}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
}


/* 
import { useProperties } from '@/hooks/useProperties';
import PropertyCard from '@/components/PropertyCard';
import { useFilters } from '@/context/FiltersContext';

export default function PropertyList() {
  const { filters } = useFilters();

  // reutilizamos el hook con filtros
  const { data, error, isLoading } = useProperties({
    name: filters.name,
    address: filters.address,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    page: filters.page,
    limit: filters.limit,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar propiedades</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.results?.map((p) => (
        <PropertyCard key={p.id} prop={p} />
      ))}
    </div>
  );
}

*/
