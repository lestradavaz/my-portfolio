import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const serve = spawn('npx', ['serve', 'dist', '-l', `${host}:${port}`], {
  stdio: 'inherit',
  shell: true
});

serve.on('error', (err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});

serve.on('exit', (code) => {
  process.exit(code || 0);
});

