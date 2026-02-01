import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signup')
  signup(@Body() body: SignupDto) {
    return this.auth.signUp(
      body.firstname,
      body.lastname,
      body.email,
      body.password,
    );
  }
}
