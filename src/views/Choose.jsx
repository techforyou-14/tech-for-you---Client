import { useState } from "react";
import Card from "../components/ui/commons/Card";
import Navbar from "../components/ui/navbar/Navbar";



export default function choose() {

  const [district, setDistrict] = useState();
  const [tree, setTree] = useState();
  const [treeName, setTreeName] = useState();

 let requestBody

  const handleSubmit = (e) => {
    
    // Create an object representing the request body
    requestBody = {
      district,
      tree,
      treeName
    }}


  return (
    <>
      <Navbar />
      <div className="w-full px-[5%] md:px-[10%]  min-h-screen ">
        <div className="grid grid-cols-2 gap-x-4  ">
          <Card>
            <figure className="  px-2 pt-2  ">
              <img
                src="/public/distritos.JPG"
                alt="map of district"
                className="rounded-xl w-screen"
              />
            </figure>
            <div className="card-body items-center text-center">
              {/*  <h2 className="card-title">Elige el distrito:</h2> */}
              <select className="select select-primary w-full max-w-xs" onChange={(e) => setDistrict(e.target.value)}>
                <option disabled selected>
                  Elige un distrito
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
              {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
            </div>
          </Card>
          <Card>
            <figure className="    ">
              <img
                src="/public/arbol.JPG"
                alt="arboles"
                className="rounded-xl w-50 "
              />
            </figure>
            <div className="card-body items-center text-center">
              {/* <h2 className="card-title">Elige un arbol:</h2> */}
              <select className="select select-primary w-full max-w-xs" onChange={(e) => setTree(e.target.value)}>
                <option disabled selected>
                  Elige un arbol
                </option>
                <option>Algarrobo</option>
                <option>Lentisco</option>
                <option>Olivo</option>
                <option>Cipres</option>
                <option>Pino Piñonero</option>
              </select>
            </div>
          </Card>
        </div>

        <div className="mt-5">
          <Card>
            <div className=" flex justify-between items-center">
              <div>
                <label className="label">
                  <span className="label-text font-bold">
                    Como se llamara tu arbol?{" "}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setTreeName(e.target.value)}
                />
              </div>
              <div >
                
                <button className="btn btn-md btn-primary" onClick={handleSubmit}>
                  Confirmar
                </button>
                
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
