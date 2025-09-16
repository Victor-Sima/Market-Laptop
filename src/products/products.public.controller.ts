import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';

// aici pui interfața
interface SearchQuery {
  name?: string;
  minPrice?: string; // query vine ca string
  maxPrice?: string;
}

@Controller()
export class ProductsPublicController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('list')
  getList() {
    return this.productsService.findAll();
  }

  @Get('details/:id')
  getDetails(@Param('id') idParam: string) {
    const id = Number(idParam);
    if (Number.isNaN(id)) {
      throw new NotFoundException('Invalid id');
    }
    const product = this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  // --- nou ---
  @Get('search')
  search(@Query() query: SearchQuery) {
    const filters = {
      name: query.name,
      minPrice: query.minPrice ? Number(query.minPrice) : undefined,
      maxPrice: query.maxPrice ? Number(query.maxPrice) : undefined,
    };
    return this.productsService.search(filters);
  }
}
