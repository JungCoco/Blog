import { funcWriteCssFile } from '@/lib/design-system/script/generate-css'
import type { Plugin } from 'vite'

export default function designSystemPlugin(): Plugin {

    return {
        name: 'design-system.plugin',

        // 빌드 시작 시 Css 생성
        buildStart() { funcWriteCssFile(); },

        // 개발 서버 설정
        configureServer(_server) {
            funcWriteCssFile();

            return
        }

    }
}