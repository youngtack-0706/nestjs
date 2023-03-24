import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return "This action retruns all cats";
    }

    @Get(':id')
    findOne(@Param('id')id: string): string {
        return `This action retrun a #${id} cat`;
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto){
        return "This action adds a new cat"
    }

    @Put(':id')
    update(@Param('id')id: string, @Body() createCatDto: CreateCatDto){
        return `This actions update a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id')id: string){
        return `This actions delete a #${id} cat`;
    }
}
