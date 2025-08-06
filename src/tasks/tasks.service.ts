import { Injectable } from "@nestjs/common";
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
    return this.tasks.find((task) => task.id === Number(id));
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
}
