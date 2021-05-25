const db = require("../models");

exports.principal = (req, res) => {
    db.DetallePedido.findAll({
        attributes: ["id", "nombre", "descripcion"],
        order: [
          ["nombre", "DESC"],
          ["descripcion", "ASC"],
        ],
    })
    .then((registros) => {
        res.status(200).send(registros);
    })
    .catch((err) => {
        res.status(500).send({
        msg: "Error en accceso a la base de datos",
        error: err.errors[0].message,
        });
    });
}

exports.buscar = (req, res) => {
    const key = req.params.key;
    const value = req.params.value;

    db.DetallePedido.findAll({
        attributes: ["id", "nombre", "descripcion"],
        where: { [key]: value },
        order: [
        ["nombre", "DESC"],
        ["descripcion", "ASC"],
        ],
    })
    .then((registros) => {
    res.status(200).send(registros);
    })
    .catch((err) => {
        res.status(500).send({
            msg: "Error en accceso a la base de datos",
            error: err.errors[0].message,
        });
    });
}

exports.nuevo = (req, res) => {
    const nuevoRegistro = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
      };
    
      db.DetallePedido.create(nuevoRegistro)
        .then((reg) => {
          res.status(200).send({
            msg: "OK creado correctamente ",
            registro: reg,
          });
        })
        .catch((err) => {
          res.status(500).send({
            msg: "Error en la carga ",
            error: err.errors[0].message,
          });
        });
}

exports.editar = (req, res) => {
  let registroActualizar = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
  };

  const id = req.body.id;

  db.DetallePedido.update(registroActualizar, {
    where: { id: id },
  })
    .then((cant) => {
      if (cant == 1) {
        res.status(200).send({
          msg: "OK actualizado correctamente ",
          registro: registroActualizar,
        });
      } else {
        res.status(500).send({
          msg: "ERROR EN ACTUALIZACIÓN ",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        msg: "Error en la carga ",
        error: err.errors[0].message,
      });
    });
}

exports.eliminar = (req, res) => {
    res.status(200).send({ msg: 'OK desde ELIMINAR ******* ' });
}