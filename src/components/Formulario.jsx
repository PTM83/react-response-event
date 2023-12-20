import { useState } from 'react';
import '../assets/cssComponents/cssFormulario.css'
import Button from 'react-bootstrap/Button'

const Formulario = ({setError, setSuccess}) => {

    const regexParaNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
    const regexParaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        if (nombre.length === 0 && email.length === 0 && password.length === 0 && check.length === 0) {
            setError('Debe completar todos los campos');
            return 
        }

        if (nombre.length === 0) {
            setError("Nombre no puede estar vacio");
            return 
        } else if (!regexParaNombre.test(nombre)) {
            setError("Nombre no puede contener numeros ni simbolos");
            return 
        } else if (email.length === 0) {
            setError("Campo email no puede estar vacio");
            return 
        } else if (!regexParaEmail.test(email)) {
            setError("Mail debe ser user@example.com");
            return 
        } else if (password !== check) {
            setError("Contraseña invalida");
            return 
        }
        setSuccess("Perfecto!");
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className = 'FormularioCss' autoComplete='off'>
                <input type='text' placeholder="Nombre" value={nombre}
                onChange={(e) => setNombre(e.target.value)} autoFocus />

                <input type='text' placeholder="user@example.com" value={email}
                onChange={(a) => setEmail(a.target.value)} autoFocus />

                <input type='password' placeholder="Contraseña" value={password}
                onChange={(a) => setPassword(a.target.value)} />

                <input type='password' placeholder="Confirma tu contraseña" value={check}
                onChange={(a) => setCheck(a.target.value)} />

                <Button variant='success' type='submit'> Registrar </Button>
            </form>
        </div>
    )
}

export default Formulario

/*
        setError("");
        setSuccess("");

*/