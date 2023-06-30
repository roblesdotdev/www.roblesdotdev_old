import type { V2_HtmlMetaDescriptor } from '@remix-run/node'

export function getSocialMetas({
  url,
  title = 'Aldo R. Robles',
  description = 'Aldo R. Robles Full-stack Developer',
  image = 'https://roblesdotdev.fly.dev/images/abstract-preview.jpg',
  keywords = 'full stack, full stack developer, typescript, react, javascript, node, python',
}: {
  image?: string
  url: string
  title?: string
  description?: string
  keywords?: string
}): V2_HtmlMetaDescriptor[] {
  return [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:title', content: title },
    {
      name: 'twitter:card',
      content: image ? 'summary_large_image' : 'summary',
    },
    { name: 'twitter:creator', content: '@roblesdotdev' },
    { name: 'twitter:site', content: '@roblesdotdev' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:alt', content: title },
  ]
}
