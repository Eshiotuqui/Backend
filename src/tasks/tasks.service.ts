import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import type { Task } from "./entities/task.entity";
import type { CreateTaskDto } from "./dto/create-task.dto";
import type { UpdateTaskDto } from "./dto/update-task.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  private tasks: Task[] = [
    { id: 1, name: "Task 1", description: "Description 1", completed: false },
    { id: 2, name: "Task 2", description: "Description 2", completed: true },
    { id: 3, name: "Task 3", description: "Description 3", completed: true },
    { id: 4, name: "Task 4", description: "Description 4", completed: true }
  ];

  async findAllTasks() {
    const allTasks = await this.prisma.task.findMany();
    return allTasks;
  }

  async findTaskById(id: string) {
    const task = await this.prisma.task.findFirst({
      where: { id: Number(id) }
    });

    if (task?.name) return task;

    throw new HttpException("Task not found", HttpStatus.NOT_FOUND);
  }

  createTask(CreateTaskDto: CreateTaskDto) {
    const newId = this.tasks.length + 1;

    const newTask = {
      id: newId,
      ...CreateTaskDto,
      completed: false
    };

    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(id: string, UpdateTaskDto: UpdateTaskDto) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException("Task not found");
    }

    const taskItem = this.tasks[taskIndex];
    this.tasks[taskIndex] = { ...taskItem, ...UpdateTaskDto };

    return this.tasks[taskIndex];
  }

  deleteTask(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException("Task not found");
    }

    this.tasks.splice(taskIndex, 1);
    return {
      message: "Task deleted"
    };
  }
}
