const AdmZip = require('adm-zip');

const zip = new AdmZip('compressed_folder_sem7.zip');
const extractToPath = 'D:/sem7/extractfile';
zip.extractAllTo(extractToPath, true);
