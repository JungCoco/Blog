import { funcWriteCssFile } from '../lib/design-system/script/generate-css'
import path from 'node:path'
import type { Plugin } from 'vite'
import { throttle } from 'es-toolkit/function';

export default function designSystemPlugin(): Plugin {

    return {
        name: 'design-system.plugin',

        // generate CSS when build(prod/dev) starts
        buildStart() { funcWriteCssFile(); },

        // dev server setup
        configureServer(server) {
            const root = server.config.root
            const filePath = 'src/lib/design-system/primitive/primitive-tokens.json'
            const tokenFile = path.resolve(root, filePath)
            // @reference: https://es-toolkit.dev/ko/reference/function/throttle.html#throttle-func-throttlems-options
            const runScript = throttle(() => { funcWriteCssFile(); }, 300)

            // add vite watcher monitoring file
            server.watcher.add(tokenFile)

            server.watcher.on('change', (changedPath) => {
                if (changedPath !== tokenFile) return
                runScript();
            })
        }
    }
}