export type datesType = {
	id: number
	date: Date
	meta?: metaType
}
export type metaType = {
	price?: number
	startTime: number
	finishTime: number
}

export type time = {
	startTime: string
	finishTime: string
}
