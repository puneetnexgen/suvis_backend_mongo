import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto  {

    @ApiProperty()
    recipeName: string;
}
