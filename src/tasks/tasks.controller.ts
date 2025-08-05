import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.tasksService.findAllTasks();
  }

  @Get(":id")
  findTaskById(@Param("id") id: string) {
    return this.tasksService.findTaskById(id);
  }

  @Post()
  createTask(@Body() body: any) {
    return this.tasksService.createTask(body);
  }
}
