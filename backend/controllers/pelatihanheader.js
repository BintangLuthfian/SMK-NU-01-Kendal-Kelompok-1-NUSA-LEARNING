import PelatihanHeader from "../models/pelatihanheader.js";
import path from "path";

export const getData = async (req, res) => {
  try {
    const response = await PelatihanHeader.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// export const getDataById = async (req, res) => {
//   try {
//     const response = await PelatihanHeader.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const DataHeader = async (req, res) => {
  try {
    const name = req.body.nama;
    const description = req.body.deskripsi;

    if (!name || !description) {
      return res.status(400).json({ msg: "Nama dan deskripsi harus diisi" });
    }

    await PelatihanHeader.create({
      name: name,
      description: description,
    });

    res.status(201).json({ msg: "Data Berhasil Di Buat" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const updateData = async (req, res) => {
  try {
    const pelatihanheader = await PelatihanHeader.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!pelatihanheader) {
      return res.status(404).json({ msg: "Data tidak ada" });
    }

    const { nama, deskripsi } = req.body;

    if (!nama && !deskripsi) {
      return res.status(400).json({ msg: "Nama atau deskripsi harus diisi" });
    }

    let updateFields = {};

    if (nama) {
      updateFields.name = nama;
    }

    if (deskripsi) {
      updateFields.description = deskripsi;
    }

    await pelatihanheader.update(updateFields);

    res.status(200).json({ msg: "Data Berhasil di Perbarui" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const deleteData = async (req, res) => {
  const pelatihanheader = await PelatihanHeader.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!pelatihanheader) return res.status(404).json({ msg: "Data tidak ada!" });

  try {
    await PelatihanHeader.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Hapus" });
  } catch (error) {
    console.log(error.message);
  }
};
