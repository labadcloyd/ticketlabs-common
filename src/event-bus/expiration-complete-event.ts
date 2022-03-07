import { Subjects, OrderStatus } from "./types";

export default interface ExpirationCompleteEvent {
	subject: Subjects.ExpirationComplete,
	data: {
		orderId: string
	}
}