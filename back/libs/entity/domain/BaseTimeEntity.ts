import {
  CreateDateColumn,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LocalDateTime, nativeJs } from 'js-joda';
import { BigintValueTransformer } from './transformer/BigintValueTransformer';

export abstract class BaseTimeEntity {
  @Generated('increment')
  @PrimaryColumn({ type: 'bigint', transformer: new BigintValueTransformer() })
  id: number;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;

  getCreatedAt(): LocalDateTime {
    return LocalDateTime.from(nativeJs(this.createdAt));
  }

  getUpdatedAt(): LocalDateTime {
    return LocalDateTime.from(nativeJs(this.updatedAt));
  }
}
