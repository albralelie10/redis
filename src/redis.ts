import Redis from 'ioredis';

const redisClient = new Redis({
    host: process.env.PORT||'localhost',
    port: 6379,
    // Otras opciones de configuración de conexión si es necesario
  });
  
  export default redisClient;