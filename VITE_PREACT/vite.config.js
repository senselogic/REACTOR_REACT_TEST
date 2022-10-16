import { defineConfig } from 'vite';
import reactor from 'senselogic-reactor-vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    plugins: [
        reactor( { framework: 'preact', include: './src/**/*.jsx' } ),
        preact()
        ]
    });
