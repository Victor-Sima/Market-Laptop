import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsPublicController } from './products.public.controller';

@Module({
  controllers: [ProductsPublicController],
  providers: [ProductsService],
})
export class ProductsModule {}
