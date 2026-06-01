export const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  const offset = 80

  const top =
    el.getBoundingClientRect().top +
    window.pageYOffset -
    offset

  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}