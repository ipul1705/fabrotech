import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderboardController } from './leaderboard/leaderboard.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, LeaderboardController],
  providers: [AppService],
})
export class AppModule {}
