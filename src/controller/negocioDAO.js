const express = require("express");
const database = require("../models");

module.exports = {
  async getNegocios(req, res) {
    
    
    return database.Negocio.findAll({
      attributes: [
        "idNegocio",
        "nombre",
        "correo",
        "descripción",
        "foto",
        "fotoPortada",
        "metodosPago",
      ],

      include: {
        model: database.Sucursal, as: "Sucursal",
        atributes: ['idSucursal', 'aforoActual', 'capacidad', 'direccion', 'latitud', 'longitud', 'telefono', 'medidasSanitarias', 'foto', 'fotoportada']
      }
    }).then((negocios) => res.send(negocios));
  },

  async getNegocio(req, res) {
    return database.Negocio.findOne({
      attributes: ["idNegocio", "nombre", "correo", "descripción"],
      where: {
        idNegocio: req.params.idNegocio,
      },
    }).then((Negocio) => {
      if (Negocio == null) {
        return res.json({
          status: "Not found",
        });
      } else {
        return res.send(Negocio);
      }
    });
  },

  async buscarNegocio(req, res) {
    return database.Negocio.findOne({
      where: {
        nombre: req.params.nombre,
      },
    }).then((Negocios) => {
      if (Negocios == null) {
        return res.json({
          status: "Not found",
        });
      } else {
        return res.send(Negocios);
      }
    });
  },

  async createNegocio(req, res) {
    return database.Negocio.create(req.body).then((submitedNegocio) =>
      res.status(200).json({
        idNegocio: submitedNegocio.idNegocio,
        nombreNegocio: submitedNegocio.nombreNegocio,
      })
    );
  },

  async deleteNegocio(req, res) {
    return database.Negocio.destroy({
      where: {
        nombreNegocio: req.params.nombreNegocio,
      },
    }).then(() => res.sendStatus(200));
  },
};
