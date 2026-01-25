export function handleDateClick(
	e: React.MouseEvent<HTMLSpanElement>,
	id: number,
) {
	console.log(e.currentTarget.textContent, ' | ', id)
}
