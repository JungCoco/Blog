import { funcWriteCssFile } from '../lib/design-system/script/generate-css'
import path from 'node:path'
import type { Plugin } from 'vite'
import { debounce } from 'lodash-es'

export default function designSystemPlugin(): Plugin {

    return {
        name: 'design-system.plugin',

        // 빌드 시작 시 Css 생성
        buildStart() { funcWriteCssFile(); },

        // 개발 서버 설정
        configureServer(server) {
            const root = server.config.root
            const filePath = 'src/lib/design-system/primitive/primitive-tokens.json'
            const tokenFile = path.resolve(root, filePath)
            const runScript = debounce(() => { funcWriteCssFile(); }, 200)

            server.watcher.add(tokenFile)

            server.watcher.on('change', (changedPath) => {
                if (changedPath !== tokenFile) return
                runScript();
            })
        }
    }
}