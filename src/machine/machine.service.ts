import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Imachine } from "./interface/machine.interface";



@Injectable()
export class MachineService {
  constructor(@InjectModel('Machine') private machineModel:Model<Imachine>){}

  async getAllMachines(): Promise<Imachine[]> {
    const machineData = await this.machineModel.find({});
    if (!machineData || machineData.length == 0) {
      throw new NotFoundException('machines data not found!');
    }
    return machineData;
  }


  async createMachine(createMachineDto: CreateMachineDto) {
    const newMachine = new this.machineModel({ ...createMachineDto});
    return await newMachine.save()
  }


  async updateMachine(id: string, updateMachineDto: UpdateMachineDto): Promise<Imachine> {
    const existingMachine =await this.machineModel.findByIdAndUpdate(id, updateMachineDto, { new: true }).exec();
    if (!existingMachine) {
      throw new NotFoundException(`machine #${id} not found`);
    }
    return existingMachine;
  }
  
  
  findByMachineToken(machineToken: any){
    return this.machineModel.findOne({machineToken});
  }
<<<<<<< HEAD
=======



  // async getMachine(machineId: string): Promise<Imachine> {
  //   const existingMachine = await this.machineModel.findById(machineId).exec();
  //   if (!existingMachine) {
  //    throw new NotFoundException(`machine #${machineId} not found`);
  //   }
  //   return existingMachine;
  // }
>>>>>>> fbe0bb062ad8906d3d98b1a9b08ff0f297e41e89
}