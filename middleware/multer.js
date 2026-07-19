const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'test',
    format: async (req, file) => 'png', // supports promises as well
    // allowed_formats : ['jpg' , 'png'] ,
    // size : '5mp',
    // public_id: (req, file) => 'computed-filename-using-request',
  },
});
 
const upload = multer({ storage })

module.exports = upload

 