const redis = await import('redis');

(async () => {
    const client = redis.createClient();
    await client.connect();

    await client.subscribe('hack4rail', (message) => {
        console.log('### Received XML ###');
        console.log(message);
        console.log('####################');
        console.log();
    });

})();
