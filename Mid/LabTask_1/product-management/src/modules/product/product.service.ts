import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: any) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: string, updateProductDto: any) {
    await this.findOne(id); // Check if it exists
    await this.productRepository.update(id, updateProductDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }
}