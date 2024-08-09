import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Import the SWC plugin

console.log('Using SWC for React transformations'); 

export default defineConfig({
  plugins: [react()], // Use the SWC plugin
});
