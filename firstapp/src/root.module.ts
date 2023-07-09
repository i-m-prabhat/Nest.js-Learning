import { Module } from '@nestjs/common';
@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule
{
  constructor()
  {
    console.log("Root world");
  }
}
