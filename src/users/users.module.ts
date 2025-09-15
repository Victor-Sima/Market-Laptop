import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersPublicController } from './users.public.controller';
import { UsersAdminController } from './users.admin.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersPublicController, UsersAdminController],
  exports: [UsersService],
})
export class UsersModule {}
