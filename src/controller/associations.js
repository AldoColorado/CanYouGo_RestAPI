const database = require("../models")

// Cuenta-Dueño
database.Cuenta.hasOne(database.Dueño, {foreignKey: "username"});
database.Dueño.belongsTo(database.Cuenta, {foreignKey: 'username' });
// Cuenta-Cliente
database.Cuenta.hasOne(database.Cliente, {foreignKey: "username"});
database.Cliente.belongsTo(database.Cuenta, {foreignKey: "username"});
// Negocio-Sucursal
database.Negocio.hasMany(database.Sucursal, {as: 'Sucursal', foreignKey: 'idNegocio' });
database.Sucursal.belongsTo(database.Negocio, {foreignKey: 'idNegocio' });

// Sucursal-Horario
database.Sucursal.hasMany(database.Horario,{as: 'Horario', foreignKey: 'idSucursal'});
database.Horario.belongsTo(database.Sucursal, {foreignKey: 'idSucursal' });

// Cliente-Reservacion
database.Cliente.hasMany(database.Reservacion,{as: 'Reservacion', foreignKey: 'idCliente'});
database.Reservacion.belongsTo(database.Cliente, {foreignKey: 'idCliente' });

// Sucursal-Reservacion
database.Sucursal.hasMany(database.Reservacion,{as: 'Reservacion', foreignKey: 'idSucursal'});
database.Reservacion.belongsTo(database.Sucursal, {foreignKey: 'idSucursal' });


// // Album-Artista
// database.Album.belongsTo(database.Artista, {foreignKey: 'idArtista' });
// database.Artista.hasMany(database.Album, {foreignKey: 'idArtista' });
// // Album-Consumidor
// database.Album.belongsToMany(database.Consumidor, {through: 'AlbumLike', foreignKey: 'idAlbum', otherKey: 'idConsumidor'});
// database.Consumidor.belongsToMany(database.Album, {through: 'AlbumLike', foreignKey: 'idConsumidor', otherKey: 'idAlbum'});
// // Genero-Artista
// database.Genero.hasMany(database.Artista, {foreignKey: 'idGenero' });
// database.Artista.belongsTo(database.Genero, {foreignKey: 'idGenero' });
// // Artista-Consumidor
// database.Artista.belongsToMany(database.Consumidor, {through: 'ArtistLike', foreignKey: 'idArtista', otherKey: 'idConsumidor'});
// database.Consumidor.belongsToMany(database.Artista, {through: 'ArtistLike', foreignKey: 'idConsumidor', otherKey: 'idArtista'});
// // Cancion-Genero
// database.Cancion.belongsTo(database.Genero, {foreignKey: 'idGenero' });
// database.Genero.hasMany(database.Cancion, {foreignKey: 'idGenero' });
// // Cancion-ListaReproduccion
// database.Cancion.belongsToMany(database.ListaReproduccion, {through: 'ListaCancion', foreignKey: 'idCancion', otherKey: 'idListaReproduccion'} );
// database.ListaReproduccion.belongsToMany(database.Cancion, {through: 'ListaCancion', foreignKey: 'idListaReproduccion', otherKey: 'idCancion'});
// // Cancion-Consumidor
// database.Cancion.belongsToMany(database.Consumidor, {through: 'SongLike', foreignKey: 'idCancion', otherKey: 'idConsumidor'});
// database.Consumidor.belongsToMany(database.Cancion, {through: 'SongLike', foreignKey: 'idConsumidor', otherKey: 'idCancion'});
// // Consumidor-Suscripcion
// database.Consumidor.hasOne(database.Suscripcion, {foreignKey: 'idConsumidor' });
// database.Suscripcion.belongsTo(database.Consumidor, {foreignKey: 'idConsumidor' });
// // Consumidor-ListaReproduccion
// database.Consumidor.hasMany(database.ListaReproduccion, {foreignKey: "idConsumidor"});
// database.ListaReproduccion.belongsTo(database.Consumidor, {foreignKey: "idConsumidor"});

// database.SongLike.hasOne(database.Cancion, {foreignKey: "idCancion"});
// database.ArtistLike.hasOne(database.Artista, {foreignKey: "idArtista"});
// database.AlbumLike.hasOne(database.Album, {foreignKey: "idAlbum"})
// database.ListaReproduccion.hasMany(database.ListaCancion, {as: 'ListaCancion' ,foreignKey: "idListaReproduccion"})
// database.ListaCancion.hasOne(database.Cancion, {foreignKey: "idCancion"});