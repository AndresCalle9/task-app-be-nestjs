import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Task} from '../scheme/task.schema'
import {Model} from 'mongoose'

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel:Model<Task>){}

    async findAll(){
        return await this.taskModel.find()
    }
    async create(data:{title:string,description?:string}){
        return await this.taskModel.create(data)
    }
    async update(id:string,data:{title?:string,description?:string,done?:boolean}){
        return await this.taskModel.findByIdAndUpdate
        (id,data,{new:true})
    }
    async findOne(id:string){
        return await this.taskModel.findById(id)
    }
    async delete(id:string){
        return await this.taskModel.findByIdAndDelete(id)
    }
}
