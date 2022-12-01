var express = require('express');
const nodemailer = require('nodemailer')
const Mail = require('nodemailer/lib/mailer');
const MailMessage = require('nodemailer/lib/mailer/mail-message');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel')
const cloudinary = require('cloudinary').v2


router.get('/novedades', async function (req,res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 960,
                height: 200,
                crop: 'pad'
            });
            return {
                ...novedades,
                imagen
            }
        }   else {
                return{
                    ...novedades,
                    imagen: ''   
                }
            }
    });
    res.json(novedades);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'guidospano562@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo:
        ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> su tel es:
        ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado'
    });
});
module.exports = router;
