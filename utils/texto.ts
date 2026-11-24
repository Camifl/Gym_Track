import type { Exercise } from '@/types/gym';

export function normalizeText(text: string): string {
  // Separamos las tildes para eliminarlas y facilitar la búsqueda.
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export function filterExercisesByName(catalog: readonly Exercise[], query: string): Exercise[] {
  const normalizedQuery = normalizeText(query.trim());
  if (!normalizedQuery) return [];

  // Normalizamos los dos textos para buscar por nombre sin alterar lo que se muestra.
  return catalog.filter(({ name }) => normalizeText(name).includes(normalizedQuery));
}
