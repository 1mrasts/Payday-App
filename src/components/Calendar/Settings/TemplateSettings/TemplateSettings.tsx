import { useState, type Dispatch, type SetStateAction } from 'react'
import type { datesType, time } from '../../CalendarDays/CalendarDays.types'
import styles from './TemplateSettings.module.css'
import handleTemplateClose from '/src/assets/Settings/TemplateSettings/HandleTemplate-close.svg'
import handleTemplateOpen from '/src/assets/Settings/TemplateSettings/HandleTemplate-open.svg'

export function TemplateSettings({
	days,
	setDays,
	salary,
	time,
}: {
	days: datesType[]
	setDays: Dispatch<SetStateAction<datesType[]>>
	salary: number
	time: time
}) {
	const [startDay, setStartDay] = useState<string>('')
	const [isTemplatePanel, setIsTemplatePanel] = useState<boolean>(false)

	function applyTemplate({ work, rest }: { work: number; rest: number }) {
		let counter = 1
		const [y, m, d] = startDay.split('-')
		const startDate = new Date(Number(y), Number(m) - 1, Number(d), 0, 0, 0)
		const currentStartDay = days.find(
			day => day.date.getTime() == startDate.getTime(),
		)
		if (currentStartDay != undefined) {
			setDays(prev =>
				prev.map(day => {
					if (day.id < currentStartDay?.id) return day
					const isWorkDay = counter <= work

					counter++
					const updateDay = {
						...day,
						meta: isWorkDay
							? {
									price: salary,
									startTime: time.startTime,
									finishTime: time.finishTime,
								}
							: undefined,
					}
					if (counter > work + rest) {
						counter = 1
					}

					return updateDay
				}),
			)
		}
	}
	return (
		<div
			className={
				isTemplatePanel
					? 'calendar__block width-48'
					: styles['calendar__template-open']
			}
		>
			{isTemplatePanel ? (
				<>
					<div className='calendar__title'>
						<h5>Шаблоны графиков работы</h5>
						<div className='calendar__col'>
							<span>Начинать с: </span>
							<input type='date' onChange={e => setStartDay(e.target.value)} />
						</div>
					</div>
					<div className={styles['graphics']}>
						<span>Классические графики</span>
						<div className={styles['graphics__item']}>
							<button onClick={() => applyTemplate({ work: 5, rest: 2 })}>
								5/2
							</button>
							<button onClick={() => applyTemplate({ work: 6, rest: 1 })}>
								6/1
							</button>
						</div>
					</div>
					<div className={styles['graphics']}>
						<span>Сменные графики</span>
						<div className={styles['graphics__item']}>
							<button onClick={() => applyTemplate({ work: 2, rest: 2 })}>
								2/2
							</button>
							<button onClick={() => applyTemplate({ work: 3, rest: 3 })}>
								3/3
							</button>
							<button onClick={() => applyTemplate({ work: 4, rest: 2 })}>
								4/2
							</button>
						</div>
					</div>
					<button onClick={() => applyTemplate({ work: 0, rest: 0 })}>
						Очистить
					</button>
					<img
						className={styles['calendar__template-close']}
						src={handleTemplateClose}
						onClick={() => setIsTemplatePanel(!isTemplatePanel)}
					/>
				</>
			) : (
				<>
					<img
						src={handleTemplateOpen}
						onClick={() => setIsTemplatePanel(!isTemplatePanel)}
					/>
				</>
			)}
		</div>
	)
}
