import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [
    createVuePlugin(),
    'import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'

  ]

}