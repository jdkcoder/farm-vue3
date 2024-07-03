import { defineConfig, presetUno } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
    content: {
        filesystem: [
            'src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
        ],
        pipeline: {
            exclude: [ 'node_modules', 'dist', '.git', '.husky', '.vscode', 'public' ]
        }
    },
    presets: [ presetUno({ dark: 'class' }) ],
    transformers: [ transformerDirectives() ],
    shortcuts: {
    },
    theme: {
    }
});