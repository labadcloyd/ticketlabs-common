import { Subjects, OrderStatus } from "./types";

export default interface OrderCreatedEvent {
	subject: Subjects.OrderCreated,
	data: {
		id: string,
		version: number,
		status: OrderStatus,
		userId: string,
		expiresAt: string,
		ticket: {
			id: string,
			price: number
		}
	}
}