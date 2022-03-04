import { Subjects, OrderStatus } from "./types";

export default interface OrderCancelledEvent {
	subject: Subjects.OrderCancelled,
	data: {
		id: string,
		version: number,
		ticket: {
			id: string,
			price: number
		}
	}
}