import type { datesType } from '../CalendarDays/CalendarDays.types'
import endDay from '/src/assets/CalendarDay/End-day.svg'
import moneyWallet from '/src/assets/CalendarDay/Money-wallet.svg'
import startDay from '/src/assets/CalendarDay/Start-day.svg'

export function CalendarDay({ day }: { day: datesType | undefined }) {
	if (!day?.meta) return null
	return (
		<div className='calendar__block'>
			<h4>{day.date.toLocaleDateString('ru-RU')}</h4>
			<div className='sep'></div>
			<div className='calendar__col'>
				<img src={moneyWallet} alt='' />
				<p>
					Почасовая ставка: {day.meta?.price ? day.meta.price : 'Неизвестно'}
				</p>
			</div>
			<div className='calendar__col'>
				<img src={startDay} alt='' />
				<p>
					Время начала:{' '}
					{day.meta?.startTime
						? day.meta.startTime.toLocaleTimeString()
						: 'Неизвестно'}
				</p>
			</div>
			<div className='calendar__col'>
				<img src={endDay} alt='' />
				<p>
					Время окончания:{' '}
					{day.meta?.finishTime
						? day.meta.finishTime.toLocaleTimeString()
						: 'Неизвестно'}
				</p>
			</div>
		</div>
	)
}
