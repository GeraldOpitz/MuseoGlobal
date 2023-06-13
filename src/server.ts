import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import config from './config/config';
import multer from 'multer';
import cloudinary from 'cloudinary';
import connection from './config/database';
import artworkRoutes from './routes/artworkRoutes';



const app: express.Application = express();
app.use(express.json());
app.use(cors());

// Llamado a las variables de entorno
dotenv.config();

// Llamado a la conexión con la base de datos
connection();

// Configuración de Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    api_key: process.env.CLOUDINARY_API_KEY || '',
    api_secret: process.env.CLOUDINARY_API_SECRET || '',
});

// Configuración de Multer para la carga de archivos
const upload = multer({ dest: 'uploads/artworks/' });

// Ruta para cargar la imagen en Cloudinary
app.post('/api/upload', upload.single('image'), (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
    }

    cloudinary.v2.uploader.upload(file.path, async (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al cargar la imagen en Cloudinary' });
        }

        try {
            if (!result || !result.secure_url) {
                throw new Error('Error al obtener la URL de la imagen');
            }

            // Guardar la URL de la imagen en la base de datos
            const imageUrl = result.secure_url;

            return res.json({ imageUrl: result.secure_url });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Error al guardar la imagen en la base de datos' });
        }
    });
});

app.set('port', config.PORT);

// Manejo de rutas
app.use('/api/artworks/', artworkRoutes);

export default app;
