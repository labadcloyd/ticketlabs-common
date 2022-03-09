import { Subjects } from './types'

interface PaymentCreatedEvent {
	subject: Subjects.PaymentCreated,
	data: {
		id: string,
		orderId: string,
		stripeId: string
	}
}

export default PaymentCreatedEvent