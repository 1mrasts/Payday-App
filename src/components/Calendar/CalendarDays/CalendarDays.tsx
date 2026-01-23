import { useState } from 'react'
import styles from './CalendarDays.module.css'

export function CalendarDays() {
	const days = []
	// Получаем нашу текущую дату
	const [currentDate, setCurrentDate] = useState<Date>(new Date())
	// Получаем первый день месяца по текущей дате
	const firstDayOfMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		1,
	)
	// Получаем день недели этого дня
	const dayOfWeek = firstDayOfMonth.getDay()
	// Создаём удобную систему индексов для понедельника (чтобы понедельник == 0, а не 1)
	const mondayBasedIndex = (dayOfWeek + 6) % 7
	// Создаём копию данных чтобы не трогать firstDayOfMonth
	const startDate = new Date(firstDayOfMonth)
	// Выставляем дату ближайшего понедельника
	startDate.setDate(firstDayOfMonth.getDate() - mondayBasedIndex)

	for (let i = 0; i < 42; i++) {
		// Составляем дату календаря (сразу начинается с ближайшего понедельника)
		const date = new Date(startDate)
		// Выставляем дату, каждый раз повышая на 1 день (начиная с нуля)
		date.setDate(startDate.getDate() + i)

		// Пушим в массив который после будем выводить
		days.push(date)
	}

	return (
		<div className={styles['calendar__menu']}>
			{days.map(item => (
				<span>{item.getDate()}</span>
			))}
		</div>
	)
}
