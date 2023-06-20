import Button from '../../ui/commons/Button'
import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import AuthContext from '../../../context/AuthContext';
import { authService } from '../../../services/auth.service';
import swal from 'sweetalert';
import InputForm from '../../ui/commons/InputForm';

function FormRegister({ className }) {

  const { register, handleSubmit } = useForm()
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const onSubmit = async (dataForm) => {
    try {
      const { data } = await authService.register(dataForm);
      console.log(data)
      setUser(data)
      swal({
        text: "Tu cuenta ha sido creada con éxito",
        icon: "success",
      });
      navigate("/chose")
    } catch (error) {
      let errorMessage = error.response.data.message === "The email has already been taken." ? "Este correo ya está registrado.": "Error desconocido"
      swal({
        title:"Error",
        text: errorMessage,
        icon: "error",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'bg-base-300 p-8 flex flex-col text-center rounded shadow-lg ' + className}>
      <h2 className='title2'>Registrate</h2>
      <InputForm label="Nombre:" name="name" register={register} type="text" placeholder="Nombre" minLength={4} />
      <InputForm label="Correo:" name="email" register={register} type="email" placeholder="Correo" />
      <InputForm label="Contraseña:" name="password" register={register} type="password" placeholder="Contraseña" minLength={6} />
      <Button className='mt-6 btn-primary '>Registrarse</Button>
      <Link to="/login" className='mt-4 underline underline-offset-4'>¿Ya tienes una cuenta?</Link>
    </form>
  )
}

export default FormRegister