import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Track } from './schemas/track.schema';
import { Comment } from './schemas/comment.schema';
import { InjectModel } from '@nestjs/mongoose';
import { TrackDocument } from './schemas/track.schema';
import { CommentDocument } from './schemas/comment.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentkModel: Model<CommentDocument>,
  ) {}

  async create() {}
  async getAll() {}

  async getOne() {}
  async delete() {}
}
