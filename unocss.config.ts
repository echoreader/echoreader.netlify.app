import { defineConfig, presetUno, presetAttributify, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(), // ✅ bikin teks lebih halus
  ],
  shortcuts: {
    'post-card': 'bg-white text-black border-2 border-solid border-black rounded-lg p-6 shadow-sm space-y-2',
    'nav-link': 'text-gray-700 no-underline hover:text-blue-600 transition',
  },
  safelist: [
    'border', 'border-b', 'border-solid', 'border-black',
    'rounded-lg', 'shadow-sm',
    'font-sans', 'text-lg', 'text-gray-800',
    'text-xl', 'font-bold', 'text-sm', 'text-gray-500',
    'text-base', 'text-gray-700', 'hover:text-blue-600',
    'grid', 'gap-3', 'py-4', 'px-4', 'mx-auto', 'max-w-4xl',
  ],
})
