import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://YuriAndreevich:Msbl23@cluster0.xzn97zr.mongodb.net/music-platrofm?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
