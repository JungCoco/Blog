import type { Plugin } from 'vite'

export default function designSystemPlugin(): Plugin {
    
    return {
        name: 'design-system.plugin',

        // 개발 서버 설정
        configureServer(_server) {}


    }
}