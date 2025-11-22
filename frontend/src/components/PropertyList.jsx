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
