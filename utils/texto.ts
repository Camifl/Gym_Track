export function normalizeText(text: string): string {
  // Separamos las tildes para eliminarlas y facilitar la búsqueda.
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
