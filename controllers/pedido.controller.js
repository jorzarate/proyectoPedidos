const db = require("../models");

exports.principal = (req, res) => {
    db.Pedido.findAll({
        attributes: ["id", "numero", "fechaCreacion"],
        order: [
          ["numero", "DESC"],
          ["fechaCreacion", "ASC"],
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

  db.Pedido.findAll({
      attributes: ["id", "numero", "fechaCreacion"],
      where: { [key]: value },
      order: [
      ["numero", "DESC"],
      ["fechaCreacion", "ASC"],
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
        numero: req.body.numero,
        fechaCreacion: req.body.fechaCreacion,
      };
    
      db.Pedido.create(nuevoRegistro)
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
    numero: req.body.numero,
    fechaCreacion: req.body.fechaCreacion,
  };

  const id = req.body.id;

  db.Pedido.update(registroActualizar, {
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