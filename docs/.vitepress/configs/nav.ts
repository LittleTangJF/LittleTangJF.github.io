import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', link: '/nav/' },
  {
    text: '源码阅读',
    link: '/codeReading/'
  },
  { text: '踩坑记录', link: '/problem/' },
  {
    text: '个人笔记',
    link: 'https://github.com/LittleTangJF/my_note'
  }
]
