import router from '../router'

export async function navigate(href: string, target = '_blank' as '_self' | '_blank') {
  if (href.startsWith('http')) window.open(href, target)
  else {
    await router.push(href)
  }
}
