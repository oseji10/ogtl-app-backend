import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: ['booking.ogtl.ng', 'transport.ogtl.ng'],
    // origin: 'http://localhost:3000', // Update with your frontend domain if it's different
    credentials: true, // Allow credentials (cookies) to be sent
  });
  
  // Set global prefix for all routes
  app.setGlobalPrefix('api');

  // Start the server AFTER setting the prefix
  await app.listen(3006);
}

bootstrap();
