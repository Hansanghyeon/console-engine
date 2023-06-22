import Alpine from 'alpinejs'
// suggested in the Alpine docs:
// make Alpine on window available for better DX
window.Alpine = Alpine

const store = () => {
  document.addEventListener('alpine:init', () => {
  })
}

export const bootstrapAlpine = () => {
  store();
  Alpine.start()
}