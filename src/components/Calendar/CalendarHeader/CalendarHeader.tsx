import styles from './CalendarHeader.module.css'

export function CalendarHeader() {
	const weekDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
	return (
		<div className={styles['calendar__header']}>
			{weekDay.map(item => (
				<span>{item}</span>
			))}
		</div>
	)
}
