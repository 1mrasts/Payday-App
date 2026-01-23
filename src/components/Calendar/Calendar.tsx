import { CalendarDays } from './CalendarDays/CalendarDays'
import { CalendarHeader } from './CalendarHeader/CalendarHeader'

export function Calendar() {
	const currentMonth = new Date().getMonth()
	return (
		<main>
			<CalendarHeader />
			<CalendarDays month={currentMonth} />
		</main>
	)
}
