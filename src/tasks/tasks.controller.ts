import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common";
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

  @Patch(":id")
  updateTask(@Param("id") id: string, @Body() body: any) {
    console.log(body);
    console.log(id);

    return "Atualizando tarefa";
  }

  @Delete(":id")
  deleteTask(@Param("id") id: string) {
    console.log(id);
    return "Task deletada";
  }
}
