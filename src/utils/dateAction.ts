import type { Dispatch, SetStateAction } from 'react'
import type {
	datesType,
	time,
} from '../components/Calendar/CalendarDays/CalendarDays.types'

const [initialStartHours, initialStartMinutes] = [8, 0]
const [initialFinishHours, initialFinishMinutes] = [21, 0]

export function handleDateClick(
	id: number,
	days: datesType[], // Типизируем state
	setDays: Dispatch<SetStateAction<datesType[]>>, // Типизируем setState
	salary: number,
	setCurrentDay: Dispatch<SetStateAction<datesType | undefined>>,
) {
	const currentDate = days.find(item => item.id == id)
	let startDate: Date = new Date()
	let finishDate: Date = new Date()

	if (currentDate?.date instanceof Date) {
		const { date } = currentDate

		startDate = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			initialStartHours,
			initialStartMinutes,
		)
		finishDate = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			initialFinishHours,
			initialFinishMinutes,
		)
	}

	if (currentDate?.meta != undefined) {
		// Убираем price
		setDays(
			days.map(item => (item.id === id ? { ...item, meta: undefined } : item)),
		)
		setCurrentDay(currentDate)
	} else {
		// Выставляем price
		setDays(
			days.map(item =>
				item.id === id
					? {
							...item,
							meta: {
								price: salary,
								startTime: startDate.getTime(),
								finishTime: finishDate.getTime(),
							},
						}
					: item,
			),
		)
		if (typeof currentDate == 'object') {
			setCurrentDay(currentDate)
		}
	}
	console.log(currentDate)
}

export function handleTimeClick(
	id: number,
	day: datesType,
	setDays: Dispatch<SetStateAction<datesType[]>>,
	time: time | undefined,
	days: datesType[],
) {
	const currentDate = day
	let startDate: Date = new Date()
	let finishDate: Date = new Date()

	if (currentDate.date instanceof Date) {
		const { date } = currentDate
		const [startHours, startMinutes] =
			time != undefined
				? time.startTime.split(':').map(Number)
				: [initialStartHours, initialStartMinutes]
		const [finishHours, finishMinutes] =
			time != undefined
				? time.finishTime.split(':').map(Number)
				: [initialFinishHours, initialFinishMinutes]

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
	console.log(currentDate)
	setDays(
		days.map(item =>
			item.id === id
				? {
						...item,
						meta: {
							...item.meta,
							startTime: startDate.getTime(),
							finishTime: finishDate.getTime(),
						},
					}
				: item,
		),
	)
}
