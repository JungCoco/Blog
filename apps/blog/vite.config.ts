import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// design-system.plugin은 일단 제거하고 나중에 재구성
// import designSystemPlugin from './src/plugin/design-system.plugin';

export default defineConfig({

    // 플러그인 설정
    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths()
    ],

    // 개발 서버 설정
    server: {
        // watch: {
        //     ignored: ['**/design-system/primitive/**'],
        // }
    },

    // 경로 별칭 설정
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
