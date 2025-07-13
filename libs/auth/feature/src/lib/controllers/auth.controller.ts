import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from 'libs/auth/data-access/src/lib/services/auth.service';
import { BaseResponseModel, ResponseStatus } from '@food-delivery-app/common';
import { RegisterDto } from '../dtos/register.dto';

@Controller(`auth`)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() request: RegisterDto) {
    const response = await this.authService.register(request);
    return new BaseResponseModel(
      ResponseStatus.Success,
      response,
      HttpStatus.OK
    );
  }
}
