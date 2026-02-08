import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [react(), tailwindcss(), tsconfigPaths()],

    server: {
        port: 10002,
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
