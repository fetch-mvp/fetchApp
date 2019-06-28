const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new aws.S3({
  secretAccessKey: process.env.secretAccessKey,
  accessKeyId: process.env.accessKeyId,
  region: 'us-east-1'
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'photo/jpeg' || file.mimetype === 'photo/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
  }
};
const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: 'jamesfetch',
    acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, { fieldName: 'TESTING_META_DATA!' });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});
module.exports = upload;
