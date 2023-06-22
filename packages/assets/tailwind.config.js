const sans = `"KoPubWorldDotum", "KoPubWorldBatang", "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`.split(', ')
const mono = `D2Coding, 'D2 coding', monosapce`.split(', ')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    '../../layouts/**/*',
    './style/**/*',
    './script/**/*',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans,
        mono,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@hyeon/mac-scrollbar')
  ],
}

