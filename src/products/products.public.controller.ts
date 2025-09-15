import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsPublicController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('list')
  findAll() {
    return this.productsService.findAll();
  }

  @Get('details/:id')
  findOne(@Param('id') id: string) {
    const product = this.productsService.findOne(+id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }
}
