import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
// import {FacebookService} from "./facebook.service";

@Controller('facebook')
@ApiTags('Meta API')
export class FacebookController {
    // constructor(private readonly facebookService: FacebookService) {}

    @ApiOperation({
        description: "페북 로그인"
    })
    @Post()
    async facebookLogin(
        @Body() token: string
    ): Promise<string> {
        console.log(token)
        return "Login Successful"
    }
}
