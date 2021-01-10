import dayjs from "dayjs"
import isoWeek from "dayjs/plugin/isoWeek"

dayjs.extend(isoWeek)

import { CreateCalendarMonthView } from "./types"

export const createCalendarMonthView: CreateCalendarMonthView = (today) => {
  const firstDayOfFirstWeekOfMonth = dayjs(today)
    .startOf("month")
    .startOf("isoWeek")

  const weeks = [0, 1, 2, 3, 4, 5].map((week) => {
    return [0, 1, 2, 3, 4, 5, 6].map((day) => {
      return firstDayOfFirstWeekOfMonth.add(week * 7 + day, "days").toDate()
    })
  })

  return weeks
}
