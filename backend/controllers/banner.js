import Banner from "../models/banner.js";
import path from "path";

export const getData = async (req, res) => {
  try {
    const response = await Banner.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// export const getDataById = async (req, res) => {
//   try {
//     const response = await Banner.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const createData = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "Tidak Ada File yang Diupload" });
  const name = req.body.nama;
  const description = req.body.deskripsi;
  const file = req.files.gambar;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/banner/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Image tidak benar" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image tidak bisa lebih dari 5 MB" });

  file.mv(`./public/images/banner/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Banner.create({
        name: name,
        description: description,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Data Berhasil Di Buat" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateData = async (req, res) => {
  const banner = await Banner.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!banner) return res.status(404).json({ msg: "Data tidak ada" });

  let fileName = "";
  if (req.files === null) {
    fileName = banner.image;
  } else {
    const file = req.files.gambar;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "image tidak valid" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image tidak bisa lebih dari 5 MB" });

    file.mv(`./public/images/banner/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.nama;
  const description = req.body.deskripsi;
  const url = `${req.protocol}://${req.get("host")}/images/banner/${fileName}`;

  try {
    await Banner.update(
      { name: name, description: description, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Data Berhasil di Perbarui" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteData = async (req, res) => {
  const banner = await Banner.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!banner) return res.status(404).json({ msg: "Data tidak ada!" });

  try {
    await Banner.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Hapus" });
  } catch (error) {
    console.log(error.message);
  }
};
