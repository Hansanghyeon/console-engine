import bootstrap from './bootstrap'

(() => {
  bootstrap()
  // 집중하고있을때만 실행되도록
  window.addEventListener('focus', () => {
    document.body.dataset.focus = 'focusin'
  })
  window.addEventListener('blur', () => {
    document.body.dataset.focus = 'focusout'
  });
})()