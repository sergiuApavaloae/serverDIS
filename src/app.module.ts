import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sergiupetru1:8ZNBMx3v4zXbXEXU@cluster0.px42z4r.mongodb.net/',
    ),
    UsersModule,
    AuthzModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
