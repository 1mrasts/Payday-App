import styles from './CalendarHeader.module.css'

export function CalendarHeader() {
	const weekDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
	return (
		<div className={styles['calendar__header']}>
			{weekDay.map((item, index) => (
				<span key={index}>{item}</span>
			))}
		</div>
	)
}
