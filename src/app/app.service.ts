import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }
  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne({ where: condition });
  }
}

/*
 @InjectRepository work on parameters. On other hand is an extension of @Inject() that 
 takes the currently passed entity/repository and uses some logic to create a new injection token. 
 Generally, this logic is <EntityName>Repository sometimes with a connection added to it. 
 This token matches up with the created token from TypeormModule.forFeature() for the same entity.
  (Side note: if the entity passed is a repository, the token is just <EntityName> with the optional connection if it is not the default one.)
*/
