// data transfer object
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
  @IsString({ message: "O nome precisa ser um texto" })
  @MinLength(5, { message: "O nome precisa ter pelo menos 5 caracteres" })
  @IsNotEmpty({ message: "O nome não pode ser vazio" })
  readonly name: string;

  @IsString({ message: "A descrição precisa ser um texto" })
  @MinLength(10, {
    message: "A descrição precisa ter pelo menos 10 caracteres"
  })
  @IsNotEmpty()
  readonly description: string;
}
