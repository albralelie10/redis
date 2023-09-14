import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.PORT) || 6379,
  // Otras opciones de configuración de conexión si es necesario
});

export default redisClient;