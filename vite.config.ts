import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  // Preserve the local dev URL; production lives under the repository path.
  base: command === 'serve' ? '/' : '/xiaola-internship-review/',
  plugins: [react(), tailwindcss()],
}));
