import { Order } from '../entities/order';
import { OrderItem } from '../entities/order-item';

type Item = {
  id: string
  name: string
  price: number
  quantity: number
  productId: string
}

type OrderFactoryProps = {
  id: string
  customerId: string
  items: Item[]
}

export class OrderFactory {
  static create(props: OrderFactoryProps): Order {
    const items = props.items.map(item => {
      return new OrderItem(
        item.id,
        item.name,
        item.price,
        item.quantity,
        item.productId
      )
    })
    return new Order(props.id, props.customerId, items)
  }
}