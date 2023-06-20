import { useEffect, useState } from "react";
import Card from "../ui/commons/Card";
import BarChart from "./BarChart";

export default function InfoTree() {

    const myZons = [{ year: 2019, vegetation: 0.87764 }, { year: 2020, vegetation: 0.62347 }, { year: 2021, vegetation: 0.78678 }];

    const [infoZone, setInfoZone] = useState({
        labels: myZons.map((data) => data.year),
        datasets: [
            {
                label: "indice de vegetación",
                data: myZons.map((data) => data.vegetation),

            }
        ]
    })

    useEffect(() => {
        setInfoZone({
            labels: myZons.map((data) => data.year),
            datasets: [
                {
                    label: "indice de vegetación",
                    data: myZons.map((data) => data.vegetation),
                    backgroundColor: "#E08DAC"
                }
            ]
            
        })
    }, [])


    const columns = ['Árbol', 'Tipo de Hoja', 'Forma del Árbol', 'Altura Máxima', 'Tolerancia a la Sequía', 'Tolerancia a la Salinidad', 'Resistencia al Viento', 'Crecimiento', 'Características del Tronco', 'Usos Comunes', 'Requerimientos de Suelo']
    return (
        <Card className="gap-y-4">
            <div className="flex flex-col">
                <h1 className="font-bold">Arbol</h1>
                <ul>
                    {columns.map((column, index) =>
                        <li key={index}>{column} - </li>
                    )}
                </ul>
            </div>

            <div>
                <h1 className="font-bold">Zona</h1>
                <BarChart chartData={infoZone} />
            </div>
        </Card>
    )
}