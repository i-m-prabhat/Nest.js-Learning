import { All, Body, Controller, Get, HttpCode, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController
{

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
}
