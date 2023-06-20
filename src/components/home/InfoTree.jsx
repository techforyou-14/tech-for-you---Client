import { useContext, useEffect, useState } from "react";
import Card from "../ui/commons/Card";
import BarChart from "../ui/commons/BarChart";
import { treeService } from "../../services/tree.service";
import AuthContext from "../../context/AuthContext";
import jsonTree from "../../constants/tree.json"
import { authService } from "../../services/auth.service";

export default function InfoTree() {
    
    const [tree, setTree] = useState({})
    const [treeUserApi, setTreeUserApi] = useState({})
    const {user} = useContext(AuthContext)

    
    
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

    const getTree = async () =>{
        const {data} = await authService.show(user.id)
        let treeUser = data?.data?.trees[0].tree.toLowerCase();
        setTreeUserApi(data?.data?.trees[0])
        setTree(jsonTree[0][treeUser])
        console.log(jsonTree[0][treeUser])

    }

    useEffect(() => {
        getTree()
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
                <h1 className="font-bold">{treeUserApi?.alias}</h1>
                <ul>
                    <button onClick={() => console.log(tree)}>AAA</button>
                    <li>Arbol: {tree.tree}</li>
                    <li>Suelo: {tree.requerimientos_de_suelo}</li>
                    <li>Altura max: {tree.altura_máxima}</li>
                    <li>Hoja: {tree.tipo_de_hoja}</li>
                    <li>Tolerancia a sequia: {tree.tolerancia_a_la_sequia}</li>
                    <li>Crecimiento: {tree.crecimiento}</li>
                </ul>
            </div>

            <div>
                <h1 className="font-bold">Zona</h1>
                <BarChart chartData={infoZone} />
            </div>
        </Card>
    )
}