import type { datesType } from '../CalendarDays/CalendarDays.types'

export function CalendarInfo({ days }: { days: datesType[] }) {
	function getFullSum() {
		let sum = 0

		days
			.filter(item => item.meta?.price != null)
			.forEach(item => (sum += Number(item.meta?.price)))
		return sum
	}

	return (
		<>
			<span>Сумма в месяц: {getFullSum()}</span>
		</>
	)
}
