// src/phonepe/phonepe.controller.ts
import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { PhonePeHelperService } from './phonepe-helper.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('phonepe')
export class PhonePeController
{
    constructor(private readonly phonePeHelperService: PhonePeHelperService) { }

    @Post('initiate-payment')
    async initiatePayment(@Body() body: { orderId: string; amount: number }, @Res() res: Response)
    {
        try
        {
            const { orderId, amount } = body;

            const paymentUrl = await this.phonePeHelperService.initiateTransaction(orderId, amount);
            // Return the payment URL to the client
            return res.json({ paymentUrl });
        } catch (error)
        {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    @Post('verify-payment')
    async verifyPayment(@Body() body: { paymentId: string }, @Res() res: Response)
    {
        try
        {
            const { paymentId } = body;
            const paymentStatus = await this.phonePeHelperService.verifyPayment(paymentId);
            // Return the payment status to the client
            return res.json({ paymentStatus });
        } catch (error)
        {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
