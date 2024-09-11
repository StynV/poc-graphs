'use client'

import lineChartData from "@/data/lineChartData"
import DailyStars from "@/models/DailyStars"
import { useMemo } from "react"
import { AxisOptions, Chart } from "react-charts"

const MyChart = () => {
    const primaryAxis = useMemo(
        (): AxisOptions<DailyStars> => ({
            getValue: datum => datum.primary
        }),
        []
    )

    const secondaryAxes = useMemo(
        (): AxisOptions<DailyStars>[] => [{
            getValue: datum => datum.secondary,
        }],
        []
    )

    return (
        <Chart
            options={{
                data: lineChartData,
                primaryAxis,
                secondaryAxes
            }}
        />
    )
}

export default MyChart