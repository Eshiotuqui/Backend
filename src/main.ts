import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove any properties that are not in the DTO
      forbidNonWhitelisted: true // Throw an error if any properties that are not in the DTO are sent
    })
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
