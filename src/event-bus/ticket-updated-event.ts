import { Subjects } from './types'

interface TicketUpdatedEvent {
	subject: Subjects.TicketUpdated,
	data: {
		id: string,
		title: string,
		price: number,
		userId: string
	}
}

export default TicketUpdatedEvent