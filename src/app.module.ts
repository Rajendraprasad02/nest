import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './module/employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/typeorm.module';
import { OgrnizationModule } from './module/ogrnization/ogrnization.module';
import { LeaveModule } from './module/leave/leave.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    EmployeeModule,
    OgrnizationModule,
    LeaveModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
