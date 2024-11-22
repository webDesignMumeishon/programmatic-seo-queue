import cityProcessingQueue from './queue';

async function createJobs() {
    const cities = ['Everett'];
    const industry = 'Criminal Speeding Ticket';
    const websiteUrl = 'https://ticketcutter.com/';
    const companyName = 'Ticket Cutter';

    for (const city of cities) {
        console.log(`Adding job for city: ${city}`);
        await cityProcessingQueue.add({
            city,
            industry,
            websiteUrl,
            companyName,
        });
    }
    console.log('All jobs added.');
}

createJobs();
