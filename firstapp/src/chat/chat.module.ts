import { Module } from '@nestjs/common';
import { Feature3Module } from './feature3/feature3.module';

@Module({
    imports: [Feature3Module],
})
export class ChatModule
{
    constructor()
    {
        console.log("Chat Module")
    }
}
