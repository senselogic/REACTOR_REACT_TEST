import reactor from 'senselogic-reactor-vite';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactor( { framework: 'preact', include: './src/**/*.jsx' } ),
        preact()
        ]
    });
