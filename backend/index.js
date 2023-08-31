import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import db from "./config/database.js";
import router from "./routes/index.js";

import fileUpload from "express-fileupload";

import kategoriRoute from "./routes/kategoriRoute.js";
import moduleRoute from "./routes/moduleRoute.js";
import materiRoute from "./routes/materiRoute.js";
import Pelatihan from "./routes/pelatihanRoute";
import PelatihanKategori from "./routes/kategoriPelatihan.js";
import Footer from "./routes/footerRoute.js";

dotenv.config();
const app = express();

try {
        await db.authenticate();
        console.log ('data base terhubung...');
        await db.sync()
} catch (error) {
    console.error ('error');
}

app.use(cors({ credentials:true, origin:'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(fileUpload());
// Use router

app.use(kategoriRoute);
app.use(moduleRoute);
app.use(materiRoute);
app.use(Pelatihan);
app.use(PelatihanKategori);
app.use(Footer);

 

app.listen(5000, ()=> console.log('server running at port 5000')); 