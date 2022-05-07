import { dirname, normalize } from 'node:path'
import { defineNuxtModule, resolveModule } from '@nuxt/kit'

import { name, version } from '../package.json'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'antv',
  },
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: dirname(normalize(resolveModule('ant-design-vue'))),
        pattern: '*/index.js',
        prefix: 'a',
      })
    },
  },
  setup(_, nuxt) {
    nuxt.options.css.push('ant-design-vue/dist/antd.css')
  },
})