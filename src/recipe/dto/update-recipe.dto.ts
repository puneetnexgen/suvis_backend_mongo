import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';

<<<<<<< HEAD
export class UpdateRecipeDto {
  @ApiProperty()
  recipeName: string;
=======
export class UpdateRecipeDto  {

    @ApiProperty()
    recipeName: string;
>>>>>>> fbe0bb062ad8906d3d98b1a9b08ff0f297e41e89
}
