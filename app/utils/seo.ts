export function getSocialMetas({
  url,
  title = 'Aldo R. Robles',
  description = 'Aldo R. Robles Full-stack Developer',
  image = 'https://roblesdotdev.fly.dev/images/abstract-preview.jpg',
  keywords = '',
}: {
  image?: string
  url: string
  title?: string
  description?: string
  keywords?: string
}) {
  return {
    title,
    description,
    keywords,
    image,
    'og:url': url,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'twitter:card': image ? 'summary_large_image' : 'summary',
    'twitter:creator': '@roblesdotdev',
    'twitter:site': '@roblesdotdev',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:alt': title,
  }
}
