const cloudinary = require('cloudinary').v2;

const   api_key    = process.env.api_key,
        api_secret = process.env.api_secret,
        cloud_name = process.env.cloud_name;

cloudinary.config({api_key ,api_secret,cloud_name})

module.exports = cloudinary