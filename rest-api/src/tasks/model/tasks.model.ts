import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @ApiProperty({ example: 'Task title', description: 'The title of the task' })
  @Prop()
  title: string;

  @ApiProperty({
    example: 'Task description',
    description: 'The description of the task',
  })
  @Prop()
  description: string;

  @ApiProperty({
    example: false,
    description: 'is completed task? true : false',
  })
  @Prop({ default: false })
  isCompleted: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
