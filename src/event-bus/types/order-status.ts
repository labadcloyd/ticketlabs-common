enum OrderStatus {
	// When the order has been created but not reserved
	Created = 'created',
	// When the order has already been reserved, cancelled or expired
	Cancelled = 'cancelled',
	// When the order has successfully reserved the ticket
	AwaitingPayment = 'awaiting:payment',
	// When the order has reserved a ticket and paid successfully
	Complet= 'complete'
}

export default OrderStatus