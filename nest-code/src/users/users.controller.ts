import { Controller, Get } from '@nestjs/common';

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
}
