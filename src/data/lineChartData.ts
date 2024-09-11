import Series from "../models/Series"

const lineChartData: Series[] = [
    {
        label: 'React Charts',
        data: [
            { primary: new Date(2023, 1, 1), secondary: 30 },
            { primary: new Date(2023, 2, 1), secondary: 50 },
            { primary: new Date(2023, 3, 1), secondary: 70 },
            { primary: new Date(2023, 4, 1), secondary: 90 },
            { primary: new Date(2023, 5, 1), secondary: 100 },
        ]
    },
    {
        label: 'React Query',
        data: [
            { primary: new Date(2023, 1, 1), secondary: 20 },
            { primary: new Date(2023, 2, 1), secondary: 40 },
            { primary: new Date(2023, 3, 1), secondary: 60 },
            { primary: new Date(2023, 4, 1), secondary: 80 },
            { primary: new Date(2023, 5, 1), secondary: 110 },
        ]
    }
]

export default lineChartData