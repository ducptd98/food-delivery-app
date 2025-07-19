import { Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../repositories/restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {}
}
