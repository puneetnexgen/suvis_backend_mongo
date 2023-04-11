import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Imachine } from "./interface/machine.interface";

@Injectable()
export class MachineService {
  constructor(@InjectModel('Machine') private machineModel:Model<Imachine>) { }

  async createMachine(createMachineDto: CreateMachineDto): Promise<Imachine> {
    const newMachine = new this.machineModel(createMachineDto);
    return newMachine.save();
  }

  async updateMachine(machineId: string, updateMachineDto: UpdateMachineDto): Promise<Imachine> {
    const existingMachine = this.machineModel.findByIdAndUpdate(machineId, updateMachineDto, { new: true });
   if (!existingMachine) {
     throw new NotFoundException(`machine #${machineId} not found`);
   }
   return existingMachine;
  }

  async getAllMachines(): Promise<Imachine[]> {
    const machineData = await this.machineModel.find({});
    if (!machineData || machineData.length == 0) {
        throw new NotFoundException('machines data not found!');
    }
    return machineData;
  }

  async getMachine(machineId: string): Promise<Imachine> {
    const existingMachine = await this.machineModel.findById(machineId).exec();
    if (!existingMachine) {
     throw new NotFoundException(`machine #${machineId} not found`);
    }
    return existingMachine;
  }
}