import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  getData() {
    return 'Hello World!';
  }
}
