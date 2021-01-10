import { createCalendarMonthView } from "./createCalendarMonthView"
import dayjs from "dayjs"

const checkDateRange = (weeks: Date[][], starts: Date, ends: Date) => {
  expect(weeks.length).toBe(6)
  expect(weeks[0].length).toBe(7)
  expect(weeks[1].length).toBe(7)
  expect(weeks[2].length).toBe(7)
  expect(weeks[3].length).toBe(7)
  expect(weeks[4].length).toBe(7)
  expect(weeks[5].length).toBe(7)

  expect(weeks[0][0] instanceof Date).toBe(true)

  expect(dayjs(weeks[0][0]).startOf("day").toISOString()).toEqual(
    dayjs(starts).startOf("day").toISOString()
  )
  expect(dayjs(weeks[5][6]).startOf("day").toISOString()).toEqual(
    dayjs(ends).startOf("day").toISOString()
  )

  weeks.forEach((week, weekOffset) => {
    week.forEach((day, dayOffset) => {
      const shouldBe = dayjs(starts).add(dayOffset + weekOffset * 7, "days")

      try {
        expect(dayjs(day).isSame(shouldBe, "date")).toBe(true)
      } catch (error) {
        console.error(
          `error context: ${day.toISOString()} ${shouldBe.toISOString()}`
        )
        console.error(error)
      }
    })
  })
}

describe("createCalendarMonthView", () => {
  it("creates valid date ranges", () => {
    checkDateRange(
      createCalendarMonthView(new Date("2020-04-26")),
      new Date("2020-03-30"),
      new Date("2020-05-10")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2020-04-01")),
      new Date("2020-03-30"),
      new Date("2020-05-10")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2020-04-30")),
      new Date("2020-03-30"),
      new Date("2020-05-10")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2020-03-26")),
      new Date("2020-02-24"),
      new Date("2020-04-05")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2020-03-01")),
      new Date("2020-02-24"),
      new Date("2020-04-05")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2020-03-31")),
      new Date("2020-02-24"),
      new Date("2020-04-05")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2020-02-26")),
      new Date("2020-01-27"),
      new Date("2020-03-08")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2020-02-01")),
      new Date("2020-01-27"),
      new Date("2020-03-08")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2020-02-29")),
      new Date("2020-01-27"),
      new Date("2020-03-08")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2020-01-26")),
      new Date("2019-12-30"),
      new Date("2020-02-09")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2020-01-01")),
      new Date("2019-12-30"),
      new Date("2020-02-09")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2020-01-31")),
      new Date("2019-12-30"),
      new Date("2020-02-09")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-12-26")),
      new Date("2019-11-25"),
      new Date("2020-01-05")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-12-01")),
      new Date("2019-11-25"),
      new Date("2020-01-05")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-12-31")),
      new Date("2019-11-25"),
      new Date("2020-01-05")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-11-26")),
      new Date("2019-10-28"),
      new Date("2019-12-08")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-11-01")),
      new Date("2019-10-28"),
      new Date("2019-12-08")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-11-30")),
      new Date("2019-10-28"),
      new Date("2019-12-08")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-10-26")),
      new Date("2019-09-30"),
      new Date("2019-11-10")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-10-01")),
      new Date("2019-09-30"),
      new Date("2019-11-10")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-10-31")),
      new Date("2019-09-30"),
      new Date("2019-11-10")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-09-26")),
      new Date("2019-08-26"),
      new Date("2019-10-06")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-09-01")),
      new Date("2019-08-26"),
      new Date("2019-10-06")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-09-30")),
      new Date("2019-08-26"),
      new Date("2019-10-06")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-08-26")),
      new Date("2019-07-29"),
      new Date("2019-09-08")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-08-01")),
      new Date("2019-07-29"),
      new Date("2019-09-08")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-08-31")),
      new Date("2019-07-29"),
      new Date("2019-09-08")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-07-26")),
      new Date("2019-07-01"),
      new Date("2019-08-11")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-07-01")),
      new Date("2019-07-01"),
      new Date("2019-08-11")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-07-31")),
      new Date("2019-07-01"),
      new Date("2019-08-11")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-06-26")),
      new Date("2019-05-27"),
      new Date("2019-07-07")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-06-01")),
      new Date("2019-05-27"),
      new Date("2019-07-07")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-06-30")),
      new Date("2019-05-27"),
      new Date("2019-07-07")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-05-26")),
      new Date("2019-04-29"),
      new Date("2019-06-09")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-05-01")),
      new Date("2019-04-29"),
      new Date("2019-06-09")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-05-31")),
      new Date("2019-04-29"),
      new Date("2019-06-09")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-04-26")),
      new Date("2019-04-01"),
      new Date("2019-05-12")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-04-01")),
      new Date("2019-04-01"),
      new Date("2019-05-12")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-04-30")),
      new Date("2019-04-01"),
      new Date("2019-05-12")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-03-26")),
      new Date("2019-02-25"),
      new Date("2019-04-07")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-03-01")),
      new Date("2019-02-25"),
      new Date("2019-04-07")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-03-31")),
      new Date("2019-02-25"),
      new Date("2019-04-07")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-02-26")),
      new Date("2019-01-28"),
      new Date("2019-03-10")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-02-01")),
      new Date("2019-01-28"),
      new Date("2019-03-10")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-02-28")),
      new Date("2019-01-28"),
      new Date("2019-03-10")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2019-01-26")),
      new Date("2018-12-31"),
      new Date("2019-02-10")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-01-01")),
      new Date("2018-12-31"),
      new Date("2019-02-10")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2019-01-31")),
      new Date("2018-12-31"),
      new Date("2019-02-10")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2018-12-26")),
      new Date("2018-11-26"),
      new Date("2019-01-06")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2018-12-01")),
      new Date("2018-11-26"),
      new Date("2019-01-06")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2018-12-31")),
      new Date("2018-11-26"),
      new Date("2019-01-06")
    )

    checkDateRange(
      createCalendarMonthView(new Date("2018-11-26")),
      new Date("2018-10-29"),
      new Date("2018-12-09")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2018-11-01")),
      new Date("2018-10-29"),
      new Date("2018-12-09")
    )
    checkDateRange(
      createCalendarMonthView(new Date("2018-11-30")),
      new Date("2018-10-29"),
      new Date("2018-12-09")
    )
  })
})
