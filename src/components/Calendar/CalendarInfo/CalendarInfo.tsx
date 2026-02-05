import type { datesType } from '../CalendarDays/CalendarDays.types'

export function CalendarInfo({ days }: { days: datesType[] }) {
	const today = new Date()

	function getFullSum() {
		let sum = 0

		days
			.filter(item => item.meta != undefined)
			.forEach(
				item =>
					item.meta != undefined &&
					item.meta.price &&
					(sum +=
						((item.meta.finishTime.getTime() - item.meta.startTime.getTime()) /
							3600000) *
						item.meta.price),
			)
		return sum < 0 ? sum * -1 : sum
	}

	function getWorkDayCount() {
		return days.filter(
			item =>
				item.meta?.price != undefined &&
				item.date.getMonth() + 1 == today.getMonth() + 1,
		).length
	}

	return (
		<>
			<span>Сумма в месяц: {getFullSum()}</span>
			<br />
			<span>Рабочих дней в месяц: {getWorkDayCount()}</span>
		</>
	)
}
