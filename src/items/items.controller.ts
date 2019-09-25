import { Controller, Get , Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
//@Body works like req.body

@Controller('items')
export class ItemsController {
    constructor( private readonly itemsService: ItemsService) {}

    @Get()
    findAll() : Item[] {
        return this.itemsService.findAll();
    }

    // @Get(':id')
    // findOne(@Param() param){
    //     return `Item ${param.id}`
    // }
    @Get(':id')
    findOne(@Param('id') id) : Item{
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto : CreateItemDto) : string {
        return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id) : string {
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto : CreateItemDto , @Param('id') id) : string {
        return `Update ${id} - Name ${updateItemDto.name}`;
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
