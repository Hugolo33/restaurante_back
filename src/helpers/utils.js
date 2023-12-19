const dayjs = require('dayjs')
const jwt = require('jsonwebtoken')

const createToken = (user) => {
    const payload = {
        user_id: user.id,
        user_role: user.role,
        // exp: dayjs().add(1, 'day').unix()
    }
    return jwt.sign(payload, process.env.SECRET_KEY)
}

// importamos librería nodemailer
const nodemailer = require('nodemailer');

const envioCorreo = (email, asunto, texto) => {

    let config = nodemailer.createTransport({
        service: 'gmail',       
        auth: {
            user: "proyecto.casa.miranda@gmail.com",
            pass: "trmy gyzw srfw edid"
        },
        
    })

    const opciones = {
        from: 'proyecto.casa.miranda@gmail.com',
        subject: asunto,
        to: email,
        text: texto
    }
   

    config.sendMail(opciones, function(error, result) {

        if (error) console.log({ok:false, msg:error})

            console.log({
                ok: true,
                msg: result
            })
    })

}

module.exports = {
    createToken,
    envioCorreo
}