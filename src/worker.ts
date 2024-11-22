import cityProcessingQueue from './queue';
import Content from './services/content';

cityProcessingQueue.process(async (job) => {
    const { city, industry, websiteUrl, companyName, session, phone } = job.data;

    console.log(`Processing city: ${city}`);

    await new Content().create(city, industry, websiteUrl, companyName, session, phone)


    console.log(`Finished processing: ${city}`);
});

cityProcessingQueue.on('completed', (job) => {
    console.log(`Job ${job.id} completed.`);
});

cityProcessingQueue.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed:`, err);
});

console.log('Worker is running...');
