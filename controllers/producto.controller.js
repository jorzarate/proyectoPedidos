const db = require("../models");

exports.principal = (req, res) => {
    db.Producto.findAll({
        attributes: ["id", "nombre", "precio"],
        order: [
          ["nombre", "DESC"],
          ["precio", "ASC"],
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
        precio: req.body.precio,
      };
    
      db.Producto.create(nuevoRegistro)
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
    precio: req.body.precio,
  };

  const id = req.body.id;

  db.Producto.update(registroActualizar, {
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