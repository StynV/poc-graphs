'use client'

import barChartData from "@/data/barChartData"
import DailyStars from "@/models/DailyStars"
import { useMemo } from "react"
import { AxisOptions, Chart } from "react-charts"

const BarChart = () => {
    const primaryAxis = useMemo(
        (): AxisOptions<DailyStars> => ({
            getValue: datum => datum.primary,
        }),
        []
    )

    const secondaryAxes = useMemo(
        (): AxisOptions<DailyStars>[] => [{
            getValue: datum => datum.secondary,
            elementType: 'bar'
        }],
        []
    )

    return (
        <Chart
            options={{
                data: barChartData,
                primaryAxis,
                secondaryAxes
            }}
        />
    )
}

export default BarChart