import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorator/ip.decorator';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  // logger
  private readonly logger = new Logger(AppController.name);
  @Get()
  getHello(@Ip() ip: string): string {
    this.configService.get<string>('ENVIRONMENT');
    console.log(ip);
    this.logger.log(ip);
    return this.appService.getHello();
  }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `${name} hello`;
  }
}
