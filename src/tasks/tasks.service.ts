import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
  listAllTasks() {
    return [{ id: 1, name: "Task 1", description: "Description 1" }];
  }
}
