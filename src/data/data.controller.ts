import { Controller, Get, Post, HttpStatus, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateDatumArrayDto, CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  create(@Body() createDatumDto: CreateDatumArrayDto, @Res() response) {
    try{
      const dataInsert = this.dataService.create(createDatumDto);
      response.status(HttpStatus.CREATED).json({
        status: HttpStatus.CREATED,
        message: "Data Inserted Successfully"
      })
    } catch(err){
      response.status(HttpStatus.BAD_REQUEST).json("Some issue with the input")
    }
  }
}
