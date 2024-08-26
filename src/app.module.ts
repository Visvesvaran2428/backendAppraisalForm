import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeeModule } from './employee/employee.module';
import { CoreCompetencyModule } from './employee/core-competency/core-competency.module';
import { ReviewerModule } from './employee/reviewer/reviewer.module';
import { Employee } from './employee/employee.entity';
import { CoreCompetency } from './employee/core-competency/entities/core-competency.entity';
import { Reviewer } from './employee/reviewer/entities/reviewer.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [Employee, CoreCompetency, Reviewer],
      synchronize: true,
    }),
    EmployeeModule,
    CoreCompetencyModule,
    ReviewerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
