import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
  findAllTasks() {
    return [
      { id: 1, name: "Task 1", description: "Description 1" },
      { id: 2, name: "Task 2", description: "Description 2" }
    ];
  }

  findTaskById(id: string) {
    return { id, name: "Task 1", description: "Description 1" };
  }

  createTask(body: any) {
    return body;
  }
}
