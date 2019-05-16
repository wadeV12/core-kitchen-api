import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Connection } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbConnection: Connection,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.dbConnection);
    return this.appService.getHello();
  }
}
