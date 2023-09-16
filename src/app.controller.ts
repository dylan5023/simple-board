import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorator/ip.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // logger
  private readonly logger = new Logger(AppController.name);
  @Get()
  getHello(@Ip() ip: string): string {
    console.log(ip);
    this.logger.log(ip);
    return this.appService.getHello();
  }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `${name} hello`;
  }
}
