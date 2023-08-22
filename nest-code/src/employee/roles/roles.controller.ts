import { Controller, Get } from '@nestjs/common';

@Controller('roles')
export class RolesController
{

    @Get()
    rolehistory(): string
    {
        return 'This action returns all roles history'
    }

    @Get("demo-page")
    roledemohistory(): any
    {
        return 'demo page'
    }
}
