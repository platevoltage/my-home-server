
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 8000;

app.use('/RGB-strip-controller', express.static(path.join(__dirname, "../build")));
// Routes
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });






// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));