import {
  Controller,
  Get,
  Logger,
  Post,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorator/ip.decorator';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
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

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Request() req) {
    return req.user;
  }
}
