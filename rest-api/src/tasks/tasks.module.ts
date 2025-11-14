import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './model/tasks.model';
import { TasksController } from './tasks.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],

  providers: [TasksService],
  controllers: [TasksController],
  exports: [TasksService],
})
export class TasksModule {}
