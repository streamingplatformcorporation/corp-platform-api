import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post("/contact")
    contact(@Body() formData: any): string {


        console.log(formData);

        return "contactworks"
    }

    @Get('/ideas/:id')
    public getById(@Param('id') id: number): string {

        console.log(`id is ${id}`)

        return 'you asked for id #' + id;

    }

    @Get('/questions/:asked')
    public getByAsked(@Param('asked') asked: string): string {

        console.log(`asked is ${asked}`)

        return 'This is the question you asked' + asked;

    }

    @Get('/changepassword/')

    public changePassword(@Query('password') password: string): string {

        console.log(`password is ${password}`)

        return 'Yeehaw';

    }

}
