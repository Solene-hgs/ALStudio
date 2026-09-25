import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.CLIENT_URL || '*',
}));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'ALStudio API' }));
app.get('/api/items', (_req, res) => res.json([]));

app.listen(port, () => console.log(`ALStudio API running on port ${port}`));
