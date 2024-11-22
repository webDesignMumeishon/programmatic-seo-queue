import express from 'express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import cityProcessingQueue from './queue';

const app = express();
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
    queues: [new BullAdapter(cityProcessingQueue)],
    serverAdapter,
});

app.use('/admin/queues', serverAdapter.getRouter());

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Dashboard is running on http://localhost:${PORT}/admin/queues`);
});
