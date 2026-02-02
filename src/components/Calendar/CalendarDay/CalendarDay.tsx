import {
	useState,
	type Dispatch,
	type FormEvent,
	type SetStateAction,
} from 'react'
import { handleTimeClick } from '../../../utils/dateAction'
import type { datesType, time } from '../CalendarDays/CalendarDays.types'

export function CalendarDay({
	days,
	day,
	setTime,
	setDays,
	time,
}: {
	day: datesType | undefined
	days: datesType[]
	setTime: Dispatch<SetStateAction<time | undefined>>
	setDays: Dispatch<SetStateAction<datesType[]>>
	time: time | undefined
}) {
	const [startTime, setStartTime] = useState<string>('')
	const [endTime, setEndTime] = useState<string>('')

	function saveTime(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setTime({
			startTime: startTime,
			finishTime: endTime,
		})
		console.log(startTime, endTime)
		console.log(day?.id)
		if (day?.id != undefined) handleTimeClick(day?.id, day, setDays, time, days)
	}

	return (
		<>
			{day != undefined ? (
				<>
					<h4>{day.date.toLocaleDateString('ru-RU')}</h4>
					<form onSubmit={saveTime}>
						<label>Начало:</label>
						<input
							type='time'
							value={startTime}
							onChange={e => setStartTime(e.target.value)}
						/>
						<br />
						<label>Конец:</label>
						<input
							type='time'
							value={endTime}
							onChange={e => setEndTime(e.target.value)}
						/>
						<br />
						<button type='submit'>Сохранить</button>
					</form>
				</>
			) : (
				<></>
			)}
		</>
	)
}
