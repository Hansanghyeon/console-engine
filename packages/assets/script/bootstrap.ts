import { bootstrapAlpine } from './alpine/index'
import mediumZoom from 'medium-zoom'

const bootstrap = () => {
  bootstrapAlpine()

  const article = document.querySelector('article') as HTMLDivElement
  const img = article.querySelectorAll('img')
  if (img.length !== 0) {
    mediumZoom(
      img,
      {
        background: 'inhert',
        margin: 48,
      }
    )
  }
}

export default bootstrap