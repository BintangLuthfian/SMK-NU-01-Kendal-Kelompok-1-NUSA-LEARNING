import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import db from "./config/database.js";
import router from "./routes/index.js";

import FileUpload from "express-fileupload";
import Kategori from "./routes/kategori.js";
import KategoriHeader from "./routes/kategoriheader.js";
import Pelatihan from "./routes/pelatihan.js";
import PelatihanHeader from "./routes/pelatihanheader.js";
import Banner from "./routes/banner.js";
import Comment from "./routes/comment.js";
import judulpelatihan from "./routes/judulpelatihan.js";
import Reply from "./routes/reply.js";
import Detail from "./routes/detailpelatihan.js";


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
app.use(FileUpload());

app.use(express.urlencoded({ extended: true }));

app.use(Kategori);
app.use(KategoriHeader);
app.use(Pelatihan);
app.use(PelatihanHeader);
app.use(Banner);
app.use(Comment);

app.use(Detail);
app.use(Reply);
app.use(judulpelatihan);


const port = 5000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});

// app.listen(5000, ()=> console.log('server running at port 5000')); 