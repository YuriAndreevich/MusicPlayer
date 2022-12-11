import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Track } from './schemas/track.schema';
import { Comment } from './schemas/comment.schema';

@Injectable()
export class TrackService {
  constructor(
    @Injectable(Track.name) private trackModel: Model<TrackDocument>,
    @Injectable(Comment.name) private commentkModel: Model<CommentDocument>,
  ) {}

  async create() {}
  async getAll() {}

  async getOne() {}
  async delete() {}
}
