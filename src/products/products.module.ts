import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsPublicController } from './products.public.controller';
import { ProductsAdminController } from './products.admin.controller';

@Module({
  providers: [ProductsService],
  controllers: [ProductsPublicController, ProductsAdminController],
  exports: [ProductsService],
})
export class ProductsModule {}
