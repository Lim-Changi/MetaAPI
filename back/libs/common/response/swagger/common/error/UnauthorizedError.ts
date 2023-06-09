import { HttpStatus } from '@nestjs/common';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class UnauthorizedError {
  @ApiProperty({
    type: 'number',
    description: 'HTTP Error Code입니다.',
    example: HttpStatus.UNAUTHORIZED,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: 'Error 메시지',
    example: 'Unauthorized',
    description: 'Unauthorized',
  })
  message: string;

  @ApiProperty({
    type: 'string',
    description: 'Unauthorized',
    example: 'Unauthorized',
  })
  data: string;
}
