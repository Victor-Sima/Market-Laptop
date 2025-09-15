import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Dell Inspiron 15',
      brand: 'Dell',
      price: 599,
      ram: 8,
      storage: 256,
      cpu: 'Intel i5',
      description: 'Laptop pentru muncă de zi cu zi',
    },
    {
      id: 2,
      name: 'HP Pavilion 14',
      brand: 'HP',
      price: 649,
      ram: 8,
      storage: 512,
      cpu: 'Intel i5',
      description: 'Echilibrat, bun multimedia',
    },
    {
      id: 3,
      name: 'Lenovo ThinkPad E14',
      brand: 'Lenovo',
      price: 799,
      ram: 16,
      storage: 512,
      cpu: 'Intel i7',
      description: 'Business, robust',
    },
    {
      id: 4,
      name: 'Asus VivoBook 15',
      brand: 'Asus',
      price: 549,
      ram: 8,
      storage: 256,
      cpu: 'AMD Ryzen 5',
      description: 'Buget-friendly',
    },
    {
      id: 5,
      name: 'Acer Swift 3',
      brand: 'Acer',
      price: 699,
      ram: 8,
      storage: 512,
      cpu: 'AMD Ryzen 7',
      description: 'Subțire și ușor',
    },
    {
      id: 6,
      name: 'MSI Modern 14',
      brand: 'MSI',
      price: 749,
      ram: 16,
      storage: 512,
      cpu: 'Intel i5',
      description: 'Creatori ușori',
    },
    {
      id: 7,
      name: 'Apple MacBook Air M1',
      brand: 'Apple',
      price: 999,
      ram: 8,
      storage: 256,
      cpu: 'Apple M1',
      description: 'Eficiență și autonomie',
    },
    {
      id: 8,
      name: 'Dell XPS 13',
      brand: 'Dell',
      price: 1199,
      ram: 16,
      storage: 512,
      cpu: 'Intel i7',
      description: 'Premium, compact',
    },
    {
      id: 9,
      name: 'Lenovo Legion 5',
      brand: 'Lenovo',
      price: 1099,
      ram: 16,
      storage: 1024,
      cpu: 'AMD Ryzen 7',
      description: 'Gaming mid-range',
    },
    {
      id: 10,
      name: 'HP Envy 13',
      brand: 'HP',
      price: 849,
      ram: 8,
      storage: 512,
      cpu: 'Intel i5',
      description: 'Design premium',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
