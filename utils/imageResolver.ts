export function resolveImageUrl(url: string): string {
  if (!url) return "";

  // Si es una URL completa, retorna tal cual
  if (url.startsWith("http")) {
    return url;
  }

  // Si es una ruta relativa de Vercel Blob
  if (url.startsWith("blob://")) {
    return url.replace("blob://", "https://blob.vercel-storage.com/");
  }

  // Por defecto, retorna la URL tal cual
  return url;
}

export function getImageAlt(title: string): string {
  return title || "Imagen de galería";
}
