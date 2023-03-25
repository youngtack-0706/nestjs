import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './CreateCatDto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){

    };

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: string): string {
        return `This action retrun a #${id} cat`;
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto){
        return this.catsService.create(createCatDto);
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
