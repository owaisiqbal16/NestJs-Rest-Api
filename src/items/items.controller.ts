import { Controller, Get , Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
//@Body works like req.body

@Controller('items')
export class ItemsController {
    constructor( private readonly itemsService: ItemsService) {}

    @Get()
    async findAll() : Promise<Item[]> {
        return this.itemsService.findAll();
    }

    // @Get(':id')
    // findOne(@Param() param){
    //     return `Item ${param.id}`
    // }
    @Get(':id')
    findOne(@Param('id') id) : Promise<Item>{
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto : CreateItemDto) : Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id) : Promise<Item> {
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto : CreateItemDto , @Param('id') id) : Promise<Item> {
        return this.itemsService.update(id ,updateItemDto)
    }
}















// import { Controller, Get , Post, Put, Delete, Body , Req, Res } from '@nestjs/common';
// import { CreateItemDto } from './dto/create-item-dto';
// import { Request , Response } from 'express';
// //@Body works like req.body

// @Controller('items')
// export class ItemsController {
//     @Get()
//     findAll(@Req() req:Request , @Res() res:Response) : Response {
//         console.log(req.url);
//         return res.send('Hello World');
//     }

//     @Post()
//     create(@Body() createItemDto : CreateItemDto) : string {
//         return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
//     }
// }
