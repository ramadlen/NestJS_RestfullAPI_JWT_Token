import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use your JWT secret
      signOptions: { expiresIn: '5s' }, // Configure options as needed
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
