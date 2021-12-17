const express = require("express");
const database = require("../models");

module.exports = {
  async getSucursales(req, res) {
    return database.Sucursal.findAll({
      include: {
        model: database.Negocio,
        as: "Negocio",
        atributes: [
          "idNegocio",
          "nombre",
          "descripcion",
          "foto",
          "fotoPortada",
          "metodosPago",
        ],
      },
    }).then((Sucursales) => res.send(Sucursales));
  },

  async getSucursal(req, res) {
    return database.Sucursal.findOne({
      attributes: [
        "idSucursal",
        "aforoActual",
        "capacidad",
        "direccion",
        "latitud",
        "longitud",
        "telefono",
        "medidasSanitarias",
        "foto",
        "fotoPortada",
      ],
      where: {
        idSucursal: req.params.idSucursal,
      },
      include: [{all: true}],
    }).then((Sucursal) => {
      if (Sucursal == null) {
        res.sendStatus(404);
      } else {
        res.status(200).send(Sucursal);
      }
    });
  },

  async getSucursalesBy(req, res) {
    return database.Sucursal.findAll({
      where: {
        idSucursal: req.params.idSucursal,
      },
    }).then((Sucursal) => {
      if (Sucursal.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(Sucursal);
      }
    });
  },

  async createSucursal(req, res) {
    return database.Sucursal.create(req.body).then((submitedSucursal) =>
      res.status(200).send(submitedSucursal)
    );
  },

  async deleteSucursal(req, res) {
    return database.Sucursal.destroy({
      where: {
        nombreSucursal: req.params.nombreSucursal,
      },
    }).then(() => res.sendStatus(200));
  },
};
