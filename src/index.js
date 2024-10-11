import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

const PORT = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/cookies', (req, res) => {
    const cookies = req.body.cookie;
    console.log(cookies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
