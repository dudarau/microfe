import { Controller, Get, Header, Options, Param } from '@nestjs/common';
import { CssTasks } from '../../tasks/css.tasks';

@Controller('test')
export class TestController {
    constructor(private readonly css: CssTasks) {}

    @Options()
    @Header('Access-Control-Allow-Headers', '*')
    @Header('Access-Control-Allow-Origin', 'http://localhost:9000')
    @Header('Access-Control-Allow-Credentials', 'true')
    @Header('Access-Control-Allow-Methods', 'OPTIONS')
    getAppOptions(@Param('microAppName') microAppName: string): string {
        return 'true';
    }

    @Get()
    @Header('Access-Control-Allow-Origin', 'http://localhost:9000')
    @Header('Access-Control-Allow-Credentials', 'true')
    @Header('Access-Control-Allow-Methods', 'GET')
    @Header('Cache-Control', 'none')
    getApp(@Param('microAppName') microAppName: string): Promise<any> {
        return this.css.fixRelativeCssPathsInAllApps();
    }
}