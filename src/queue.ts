import Queue from 'bull';

const cityProcessingQueue = new Queue('city-processing', {
    redis: {
        host: '127.0.0.1', // Redis server
        port: 6379,        // Default Redis port
    },
});

export default cityProcessingQueue;
