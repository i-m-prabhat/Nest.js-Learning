import { BlogsService } from './../blogs/blogs.service';
import { All, Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController
{
    constructor(private blogsService: BlogsService) { }

    @Get()
    userInfo(): string
    {
        return 'User Info';
    }

    @Get("history")
    userHistory(): object
    {
        return { id: 1, text: 'vcfhvdfchcgH' }
    }

    @Get('add-user')
    // @All('add-user')
    addUserInfo(@Body() record: any): any
    {
        return "Ok Add user";
    }

    @Get('lists/:id')
    @HttpCode(402)
    listUser(@Param() record: any): string
    {
        console.log(`list User ${record}`);
        return "List user " + record.id
    }

    @Get('list')
    listFilterUser(@Query() record: any): string
    {
        console.log(record, "===")
        return "List Query user" + record.id
    }


    @Get('version*card')
    detailPage(): string
    {
        return "detail"
    }


    @Post('blog-list')
    addbloglist(@Body() record: any)
    {
        this.blogsService.create(record)
    }

    @Get('blog-list')
    async bloglist(): Promise<any[]>
    {
        return this.blogsService.finddata()
    }
}
