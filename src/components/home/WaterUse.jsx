import { useState, useEffect } from "react";
import BarChart from "../ui/commons/BarChart";
import Card from "../ui/commons/Card";
import water from '../../constants/water.json';
import LineChart from "../ui/commons/LineChart";

export default function WaterUse() {

    const [dataWater, setDataWater] = useState({
        labels: water.map((data) => data.year),
        datasets: [
            {
                label: "Agua regenerada (m^3)",
                data: water.map((data) => data.total),
                backgroundColor: "#E08DAC",
                drawBorder: false,
            }
        ]
    })

    useEffect(() => {
        setDataWater({
            labels: water.map((data) => data.year),
            datasets: [
                {
                    label: "Agua regenerada (m³)",
                    data: water.map((data) => data.total),
                    backgroundColor: "#E08DAC"
                }
            ]

        })
    }, [])
    return (
        <Card className="gap-y-4">
            <div>
                <h1 className="font-bold">Agua regenerada</h1>
                <p>
                    La reutilización consiste en dar nuevos usos al agua una vez esta se ha saneado en las depuradoras o estaciones de regeneración de agua (ERA).
                </p>
            </div>
            <div>
                <LineChart chartData={dataWater} />
            </div>
        </Card>
    )
}