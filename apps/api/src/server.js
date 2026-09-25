import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'ALStudio API' }));
app.get('/api/items', (_req, res) => res.json([]));
app.listen(process.env.PORT || 3000, () => console.log('ALStudio API running on port 3000'));
