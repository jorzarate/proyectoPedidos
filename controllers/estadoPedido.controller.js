const db = require("../models");

exports.principal = (req, res) => {
    db.EstadoPedido.findAll({
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
    res.status(200).send({ msg: 'OK desde BUSCAR ******* ' });
}

exports.nuevo = (req, res) => {
    const nuevoRegistro = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
      };
    
      db.EstadoPedido.create(nuevoRegistro)
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
    res.status(200).send({ msg: 'OK desde EDITAR ******* ' });
}

exports.eliminar = (req, res) => {
    res.status(200).send({ msg: 'OK desde ELIMINAR ******* ' });
}