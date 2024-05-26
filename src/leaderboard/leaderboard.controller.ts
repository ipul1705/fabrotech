import { Controller, Get, Post, HttpCode, Req, Res } from '@nestjs/common';

let scores = [
  {
    id : 1,
    nama : 'Layla',
    score : 50,
  },

  {
    id : 2,
    nama : 'Ipul',
    score : 60,
  },

]

@Controller()
export class LeaderboardController {
  @Get('leaderboard')
  @HttpCode(200)
  index(@Res() response) {
    response.json(scores);
    
  }

  @Post('score')
  store(@Req() request, @Res({ passthrough : true }) response) {
    const {id, nama, score} = request.body;
    scores.push({
      id,
      nama,
      score,
    })
    response.status(201).json(request.body);
   
  }
}

