// src/phonepe/phonepe.helper.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PhonePeHelperService
{
    constructor(private readonly configService: ConfigService) { }




    // const newPayment = async (req, res) =>
    // {
    //     try
    //     {
    //         const merchantTransactionId = 'M' + Date.now();
    //         const { user_id, price, phone, name } = req.body;
    //         const data = {
    //             merchantId: process.env.MERCHANT_ID,
    //             merchantTransactionId: merchantTransactionId,
    //             merchantUserId: 'MUID' + user_id,
    //             name: name,
    //             amount: price * 100,
    //             redirectUrl: `http://localhost:3001/api/v1/status/${merchantTransactionId}`,
    //             redirectMode: 'POST',
    //             mobileNumber: phone,
    //             paymentInstrument: {
    //                 type: 'PAY_PAGE'
    //             }
    //         };
    //         const payload = JSON.stringify(data);
    //         const payloadMain = Buffer.from(payload).toString('base64');
    //         const keyIndex = 2;
    //         const string = payloadMain + '/pg/v1/pay' + process.env.SALT_KEY;
    //         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    //         const checksum = sha256 + '###' + keyIndex;
    //         const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
    //         const options = {
    //             method: 'POST',
    //             url: prod_URL,
    //             headers: {
    //                 accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'X-VERIFY': checksum
    //             },
    //             data: {
    //                 request: payloadMain
    //             }
    //         };
    //         axios.request(options).then(function (response)
    //         {
    //             return res.redirect(response.data.data.instrumentResponse.redirectInfo.url)
    //         })
    //             .catch(function (error)
    //             {
    //                 console.error(error);
    //             });
    //     } catch (error)
    //     {
    //         res.status(500).send({
    //             message: error.message,
    //             success: false
    //         })
    //     }
    // }

    async initiateTransaction(orderId: string, amount: number): Promise<string>
    {
        try
        {
            console.log("Initiating transaction...");
            const merchantTransactionId = 'M' + Date.now();
            // const { MERCHANT_ID, SALT_KEY } = this.configService;
            const MERCHANT_ID = this.configService.get<string>('MERCHANT_ID');
            const SALT_KEY = this.configService.get<string>('SALT_KEY');
            // const data = {
            //     merchantId: MERCHANT_ID,
            //     merchantTransactionId,
            //     merchantUserId: 'MUID' + orderId, // Unique identifier for the customer
            //     name: 'John Doe', // Customer's name
            //     amount: amount * 100, // Amount in paisa (100 paisa = 1 INR)
            //     description: 'Payment for Order', // Description of the payment
            //     mobileNumber: '1234567890', // Customer's mobile number
            //     email: 'john.doe@example.com', // Customer's email address
            //     redirectUrl: 'http://localhost:3000/phonepe/verify-payment', // Redirect URL after payment completion
            //     returnUrl: 'http://localhost:3000', // Return URL after payment completion (can be same as redirectUrl)
            //     paymentInstrument: {
            //         type: 'PAY_PAGE', // Type of payment instrument
            //     },
            //     // Add any other required parameters based on your application's needs
            // };

            const data = {
                merchantId: MERCHANT_ID,
                merchantTransactionId: merchantTransactionId,
                merchantUserId: 'MUID' + 123,
                name: 'John Doe',
                amount: 100,
                redirectUrl: `http://localhost:3001/api/v1/status/${merchantTransactionId}`,
                redirectMode: 'POST',
                mobileNumber: '1234567890',
                paymentInstrument: {
                    type: 'PAY_PAGE'
                }
            };

            const payload = JSON.stringify(data);
            const payloadMain = Buffer.from(payload).toString('base64');
            console.log(payloadMain);
            const keyIndex = 2;
            const string = payloadMain + '/pg/v1/pay' + SALT_KEY;
            const sha256 = crypto.createHash('sha256').update(string).digest('hex');
            const checksum = sha256 + '###' + keyIndex;

            const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
            // const prod_URL = "https://api.phonepe.com/apis/hermes";
            console.log(checksum);
            const options = {
                method: 'POST',
                url: prod_URL,
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-VERIFY': checksum,
                },
                data: {
                    request: payloadMain,
                },
            };

            console.log("response is loading...........")
            const response = await axios.request(options);
            // const response = await axios.post(
            //     prod_URL,
            //     { request: payloadMain },
            //     {
            //         headers: {
            //             accept: 'application/json',
            //             'Content-Type': 'application/json',
            //             'X-VERIFY': checksum,
            //         },
            //     },
            // );

            console.log("res : ", response);
            return response.data.data.instrumentResponse.redirectInfo.url;
        } catch (error)
        {
            console.error("Error in Axios Request:", error);
            throw new Error('Failed to initiate payment');
        }
    }

    async verifyPayment(paymentId: string): Promise<boolean>
    {
        // const { MERCHANT_ID, SALT_KEY } = this.configService;
        const MERCHANT_ID = this.configService.get<string>('MERCHANT_ID');
        const SALT_KEY = this.configService.get<string>('SALT_KEY');
        const keyIndex = 2;
        const string = `/pg/v1/status/${MERCHANT_ID}/${paymentId}` + SALT_KEY;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const options = {
            method: 'GET',
            url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${MERCHANT_ID}/${paymentId}`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'X-MERCHANT-ID': MERCHANT_ID,
            },
        };

        try
        {
            const response = await axios.request(options);
            return response.data.success === true;
        } catch (error)
        {
            return false;
        }
    }
}
