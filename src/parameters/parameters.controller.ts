import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('parameters')
@ApiTags("Parameters")
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.parametersService.findByRecipeId(id);
  }

}
