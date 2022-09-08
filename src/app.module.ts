import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products.controller';

@Module({
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
