import type { Dispatch, SetStateAction } from 'react'

export function Settings({
	setSalary,
}: {
	setSalary: Dispatch<SetStateAction<number>>
}) {
	return (
		<>
			<input
				type='number'
				onChange={e =>
					isNaN(Number(e.target.value))
						? setSalary(0)
						: setSalary(Number(e.target.value))
				}
			/>
		</>
	)
}
