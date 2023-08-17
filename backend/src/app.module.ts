import { Module } from '@nestjs/common';
import { SignUpModule } from './user/sign-up/sign-up.module';
import { SignInModule } from './user/sign-in/sign-in.module';

@Module({
  imports: [SignUpModule, SignInModule],
  controllers: [],
  providers: [],
})
export class AppModule {}