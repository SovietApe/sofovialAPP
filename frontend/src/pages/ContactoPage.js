import axios from 'axios';
import React, {useState} from 'react'
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // forma dinamica

        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
    axios.post(`${process.env.REACT_API_URL}/api/contacto`, formData);
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm)
            }
    }
    return (
        <body class='body3'>
            <main class="holderForm">
                <div class="containerForm">
                    <div>
                        <h2>Contacto Rapido</h2>
                        <form class="formulario" onSubmit={handleSubmit}>
                            <p>
                                <label for="nombre">Nombre</label>
                                <input type="text" name='nombre' value={formData.nombre}
                                onChange={handleChange} />
                            </p>
                            <p>
                            <label for="email">Email</label>
                            <input type="text" name='email' value={formData.email} 
                            onChange={handleChange} />
                            </p>
                            <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text" name='telefono' value={formData.telefono} onChange={handleChange}/>
                            </p>
                            <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                            </p>
                            {sending ? <p>Enviando...</p> : null}
                            {msg ? <p>{msg}</p> : null}
                            <p>
                            <input type="submit" value="Enviar"/>
                            </p>
                        </form>
                    </div>
                    <div class="datos">
                        <h2>Otras Vias de Comunicacion</h2>
                        <p>Tambien puede contactarse con nosotros usando los siguientes metodos</p>
                        <ul>
                            <li>Teléfono: 2335135</li>
                            <li>Email: contactosofovial@gmail.com</li>
                            <li>Facebook: Sofovial</li>
                            <li>Instagram: @Sofovial</li>
                        </ul>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default ContactoPage;
