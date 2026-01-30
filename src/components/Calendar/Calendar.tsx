import { useState } from 'react'
import { CalendarDays } from './CalendarDays/CalendarDays'
import type { datesType } from './CalendarDays/CalendarDays.types'
import { CalendarHeader } from './CalendarHeader/CalendarHeader'
import { CalendarInfo } from './CalendarInfo/CalendarInfo'
import { Settings } from './Settings/Settings'

export function Calendar() {
	const [days, setDays] = useState<datesType[]>([])
	const [salary, setSalary] = useState<number>(141)
	return (
		<main>
			<CalendarHeader />
			<CalendarDays days={days} setDays={setDays} salary={salary} />
			<CalendarInfo days={days} />
			<Settings setSalary={setSalary} />
		</main>
	)
}
