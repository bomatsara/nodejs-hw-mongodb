import multer from 'multer';
import { TEMP_UPLOAD_DIR } from '../constants/index.js';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, TEMP_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const filename = `${uniqueSuffix}_${file.originalname}`;
    req.body.photo = filename;
    cb(null, filename);
  },
});

export const upload = multer({ storage });
