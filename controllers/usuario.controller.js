
exports.principal = (req, res) => {
    res.status(200).send({ msg: 'OK desde /' });
}

exports.buscar = (req, res) => {
    res.status(200).send({ msg: 'OK desde BUSCAR ******* ' });
}

exports.registro = async (req, res) => {
    const rolBase =  await db.Rol.findOne({
        where : { codigo : 'ADMIN' }
    });

    const nuevoUsuario = {
        email: req.body.email,
        password: passEncriptada,
        RolId: rolBase.id
    }

    console.log("Antes de guardar -> DATOS REC: ",nuevoUsuario);

    db.Usuario.create(nuevoUsuario).then((registro) =>{

        res.status(200).send({ 
            msg: 'Creado correctamente *** ',
            registro    
        });

    }).catch((err) =>{

        res.status(500).send({ 
            msg: 'Error al crear *** ',
            err
             
        });

    });
}

exports.login = (req, res) => {
    res.status(200).send({ msg: 'OK desde LOGIN ******* ' });
}

