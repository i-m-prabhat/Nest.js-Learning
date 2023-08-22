import { Module } from '@nestjs/common';
import { RolesController } from './roles/roles.controller';

@Module({
  controllers: [RolesController]
})
export class EmployeeModule {}
