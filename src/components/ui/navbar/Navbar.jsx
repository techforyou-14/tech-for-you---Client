import React, { useContext } from 'react'
import ToggleDarkMode from '../../toggleDarkMode/ToggleDarkMode'
import { HiUserCircle } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import AuthContext from '../../../context/AuthContext';

function Navbar() {
    const navigate = useNavigate();
    const { setUser, setToken } = useContext(AuthContext);

    const logout = () => {
        swal({
            title: "¿Desea cerrar su sesión actual?",
            icon: "warning",
            buttons: {
                cancel: {
                    text: "Cancelar",
                    value: false,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
                confirm: {
                    text: "Si",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
            },
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Tu sesión ha sido cerrada con éxito.", {
                    icon: "success",
                });
                setToken(null);
                setUser(null);
                navigate("/login");
            }
        });
    };
    return (
        <div className="navbar bg-base-100 py-8 px-0">
            <div className="flex-1">
                <Link to="/home" className="hover:scale-110 active:scale-100 title3 font-extrabold transition-all">Project</Link>
            </div>
            <div className="flex-none gap-4">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar scale-110">
                        <div className="w-10 rounded-full">
                            <HiUserCircle className='w-full h-full' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><p onClick={logout}>Cerrar sesión</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar