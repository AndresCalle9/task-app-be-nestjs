import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import {CreateTaskDto } from '../dto/create-task.dto'

@Controller('tasks')
export class TaskController {
    constructor(private taskService:TaskService){}
    @Get()
    async findAll(){
        return await this.taskService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id:string){
        return await this.taskService.findOne(id)
    }
    @Post()
    async create(@Body() body:CreateTaskDto){
        return await this.taskService.create(body)
    }
    @Put(':id')
    async update(@Param('id') id:string,@Body() body:CreateTaskDto){
        return await this.taskService.update(id,body)
    }
    @Delete(':id')
    async delete(@Param('id') id:string){
        return await this.taskService.delete(id)
    }
}
