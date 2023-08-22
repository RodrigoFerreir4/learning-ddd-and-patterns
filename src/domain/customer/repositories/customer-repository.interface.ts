import { Customer } from '../entities/customer';
import { RepositoryInterface } from '../../@shared/repository/repository-interface';

export interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> {}