import type { Dispatch, SetStateAction } from 'react'
import type {
	datesType,
	time,
} from '../components/Calendar/CalendarDays/CalendarDays.types'

export function handleDateClick(
	id: number,
	days: datesType[], // Типизируем state
	setDays: Dispatch<SetStateAction<datesType[]>>, // Типизируем setState
	salary: number,
	time: time | undefined,
	setSelectedDayID: Dispatch<SetStateAction<number | null>>,
) {
	const currentDate = days.find(item => item.id == id)
	let startDate: Date | time = new Date()
	let finishDate: Date | time = new Date()

	if (currentDate?.date instanceof Date) {
		const [startHours, startMinutes] = time
			? time.startTime.split(':').map(Number)
			: [8, 0]
		const [finishHours, finishMinutes] = time
			? time.finishTime.split(':').map(Number)
			: [21, 0]

		const { date } = currentDate

		startDate = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			startHours,
			startMinutes,
		)
		finishDate = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			finishHours,
			finishMinutes,
		)
	}

	if (currentDate?.meta != undefined) {
		// Убираем price
		setDays(prev =>
			prev.map(item => (item.id === id ? { ...item, meta: undefined } : item)),
		)
		setSelectedDayID(currentDate.id)
	} else {
		// Выставляем price
		setDays(prev =>
			prev.map(item =>
				item.id === id
					? {
							...item,
							meta: {
								price: salary,
								startTime: startDate,
								finishTime: finishDate,
							},
						}
					: item,
			),
		)
		if (typeof currentDate == 'object') {
			setSelectedDayID(currentDate.id)
		}
	}
	console.log(currentDate)
}
