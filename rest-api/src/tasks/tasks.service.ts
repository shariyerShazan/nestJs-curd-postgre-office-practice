import { Injectable } from '@nestjs/common';
import { Task } from './model/tasks.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async foundAllTask() {
    const tasks = await this.taskModel.find().exec();
    return tasks;
  }

  async foundTaskById(taskId: string) {
    const task = await this.taskModel.findById(taskId).exec();
    return task;
  }

  async createTask(task: Task) {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  async updateTask(taskId: string, task: Partial<Task>) {
    const updatedTask = await this.taskModel
      .findByIdAndUpdate(taskId, task, { new: true })
      .exec();

    return updatedTask;
  }

  async deleteTask(taskId: string) {
    return this.taskModel.findByIdAndDelete(taskId).exec();
  }
}
