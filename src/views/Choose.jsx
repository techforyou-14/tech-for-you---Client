import { useContext, useState } from "react";
import Card from "../components/ui/commons/Card";
import Navbar from "../components/ui/navbar/Navbar";
import districts from "../constants/district.json";
import jsonTree from "../constants/tree.json";
import AuthContext from "../context/AuthContext";
import { treeService } from "../services/tree.service";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function choose() {
  const { user } = useContext(AuthContext);
  const [district, setDistrict] = useState("Ciutat Vella");
  const [tree, setTree] = useState("algarrobo");
  const [treeName, setTreeName] = useState("...");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedTree = jsonTree[0][tree];
    selectedTree.alias = treeName;
    selectedTree.district = district;
    selectedTree.user_id = user.id;
    console.log(selectedTree);

    const { data } = await treeService.create(selectedTree);
    console.log(data);
    swal({
      text: "Has creado un arbol",
      icon: "success",
    });

    navigate("/home")
  };

  return (
    <div className='w-full px-[5%] md:px-[10%]  min-h-screen'>

      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="w-full pb-8 md:pb-0"
      >
        <div className="grid gap-4 md:grid-cols-2 gap-x-4  ">
          <Card className="flex flex-col justify-between">
            <figure className="  px-2 pt-2  ">
              <img
                src="/public/distritos.JPG"
                alt="map of district"
                className="rounded-xl w-full shadow-md aspect-video contrast-75 shadow-inner"
              />
            </figure>
            <div className="p-4 items-center text-center">
              <label htmlFor="" className="label ">
                Elije un distrito:
              </label>
              <select
                className="select select-primary w-full"
                onChange={(e) => setDistrict(e.target.value)}
              >
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </Card>
          <Card className="flex flex-col justify-between">
            <figure className="    ">
              <img
                src="https://th.bing.com/th/id/OIG.kggF9Xx65Y9C6ZsTOcOp?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
                alt="arboles"
                className="rounded-xl w-full shadow-md aspect-video object-cover object-top "
              />
            </figure>
            <div className="p-4 items-center text-center">
              <label className="label">Elige un arbol:</label>
              <select
                required
                defaultValue={"algarrobo"}
                className="select select-primary w-full "
                onChange={(e) => setTree(e.target.value)}
              >
                <option value="algarrobo">Algarrobo</option>
                <option value="lentisco">Lentisco</option>
                <option value="olivo">Olivo</option>
                <option value="cipres">Cipres</option>
                <option value="pino">Pino Piñonero</option>
              </select>
            </div>
          </Card>
        </div>

        <div className="mt-5 grid grid-cols-12 gap-4">
          <Card className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4 ">
           <h2><strong>Tu planta se llamará: </strong>{treeName}</h2>
           <h2><strong>Estará en el distrito de: </strong>{district}</h2>
           <h2><strong>Es de la especie: </strong>{tree}</h2>
          </Card>
          <Card className="col-span-12 md:col-span-6 ">
            <div className=" flex justify-between items-end">
              <div>
                <label className="label">
                  <span className="label-text font-bold">
                    Como se llamara tu arbol?
                  </span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nombre de tu arbol"
                  className="input input-bordered w-full md:min-w-[20rem]"
                  onChange={(e) => setTreeName(e.target.value)}
                />
              </div>
              <button className="btn btn-md btn-primary ">Confirmar</button>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
}
