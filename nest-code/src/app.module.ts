import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';

import { AuthMiddleware } from './middleware/auth';
import { AuthMiddleware2 } from './middleware/auth2';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UsersController],
  providers: [AppService, BlogsService],
})
export class AppModule implements NestModule
{
  configure(consumer: MiddlewareConsumer)
  {
    consumer.apply(AuthMiddleware, AuthMiddleware2)
      .exclude({
        path: 'users/blog-list', method: RequestMethod.GET
      })

      .forRoutes('users')
    // .forRoutes(UsersController)
    // .forRoutes({
    //   path: 'users/blog-list',method:RequestMethod.GET
    // })


  }
}

