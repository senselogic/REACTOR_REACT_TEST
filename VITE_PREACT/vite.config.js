import reactorLoader from 'senselogic-reactor-vite-loader';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactorLoader( { framework: 'preact', include: './src/**/*.jsx' } ),
        preact()
        ]
    });
