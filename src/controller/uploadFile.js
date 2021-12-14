const Multer = require('multer');
const path = require('path');
const config = require('../../config/canyougo-334222-ca971ab44f23.json');

const {Storage} = require('@google-cloud/storage');

const googleCloud = new Storage({
    keyFilename: path.join('C:/Users/Aldo/Documents/SEPTIMO SEMESTRE/DESARROLLO DE SISTEMAS WEB/CanYouGO_RestAPI/config/canyougo-334222-ca971ab44f23.json'),
    projectId: 'canyougo'
});


const doitcleanbucket = googleCloud.bucket('doitcleanbucket');

const multer = Multer({
    storage: Multer.memoryStorage(),
})

module.exports = {
    async uploadArchivo(req, res) {
            const newFileName = req.file.originalname;
            const blob =  doitcleanbucket.file(newFileName)
            const blobStream = blob.createWriteStream();
        
            blobStream.on("error", err => console.log(err));
            blobStream.on("finish", () => {
                const publicUrl = `https://storage.googleapis.com/${doitcleanbucket.name}/${blob.name}`
                res.status(200).json({
                    archivo: publicUrl
                });
            })
            blobStream.end(req.file.buffer); 
    }
}