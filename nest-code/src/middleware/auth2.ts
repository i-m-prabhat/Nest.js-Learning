import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class AuthMiddleware2 implements NestMiddleware
{
    use(req: Request, res: Response, next: NextFunction)
    {
        console.log("Request 2 is comming.....", req.url);
        next();
    }
}