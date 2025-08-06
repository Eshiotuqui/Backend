import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import type { Task } from "./entities/task.entity";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: 1, name: "Task 1", description: "Description 1", completed: false },
    { id: 2, name: "Task 2", description: "Description 2", completed: true },
    { id: 3, name: "Task 3", description: "Description 3", completed: true },
    { id: 4, name: "Task 4", description: "Description 4", completed: true }
  ];

  findAllTasks() {
    return this.tasks;
  }

  findTaskById(id: string) {
    const task = this.tasks.find((task) => task.id === Number(id));

    if (task) return task;

    throw new NotFoundException("Task not found");
  }

  createTask(body: any) {
    const newId = this.tasks.length + 1;

    const newTask = {
      id: newId,
      ...body
    };

    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(id: string, body: any) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException("Task not found");
    }

    const taskItem = this.tasks[taskIndex];
    this.tasks[taskIndex] = { ...taskItem, ...body };

    return this.tasks[taskIndex];
  }
}
