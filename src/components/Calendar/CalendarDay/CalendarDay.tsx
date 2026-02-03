import type { datesType } from '../CalendarDays/CalendarDays.types'

export function CalendarDay({ day }: { day: datesType | undefined }) {
	if (!day?.meta) return null
	return (
		<>
			<h4>{day.date.toLocaleDateString('ru-RU')}</h4>
			<p>Почасовая ставка: {day.meta?.price ? day.meta.price : 'Неизвестно'}</p>
			<p>
				Время начала:{' '}
				{day.meta?.startTime
					? day.meta.startTime.toLocaleTimeString()
					: 'Неизвестно'}
			</p>
			<p>
				Время окончания:{' '}
				{day.meta?.finishTime
					? day.meta.finishTime.toLocaleTimeString()
					: 'Неизвестно'}
			</p>
		</>
	)
}
