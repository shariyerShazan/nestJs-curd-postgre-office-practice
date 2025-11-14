import { Task } from './model/tasks.model';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTask(): Promise<Task[]> {
    return this.tasksService.foundAllTask();
  }

  @Get(':taskId')
  async getTaskById(@Param('taskId') taskId: string): Promise<Task | null> {
    return this.tasksService.foundTaskById(taskId);
  }

  @Post()
  async createTask(@Body() task: Task): Promise<Task> {
    return this.tasksService.createTask(task);
  }

  @Patch(':taskId')
  async updateTask(
    @Param('taskId') taskId: string,
    @Body() task: Partial<Task>,
  ): Promise<Task | null> {
    return this.tasksService.updateTask(taskId, task);
  }

  @Delete(':taskId')
  async deleteTask(@Param('taskId') taskId: string) {
    return this.tasksService.deleteTask(taskId);
  }
}
