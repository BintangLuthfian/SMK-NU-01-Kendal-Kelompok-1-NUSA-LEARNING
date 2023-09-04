import Detail from "../models/detailpelatihan.js";
import path from "path";

export const getData = async (req, res) => {
  try {
    const response = await Detail.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDataById = async (req, res) => {
  try {
    const response = await Detail.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "Data tidak ada" });
    }
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const Data = async (req, res) => {
  try {
    const judul = req.body.judul;
    const desc_judul = req.body.deskripsij;
    const tentang = req.body.tentang;
    const desc_tentang = req.body.deskripsit;
    const target_audiens = req.body.audiens;
    const desc_target = req.body.deskripsia;
    const kategori = req.body.kategori;
    const desc_kategori = req.body.deskripsik;
    const masa_berlaku_lisensi = req.body.masaberlaku;
    const desc_lisensi = req.body.deskripsimb;
    const tanggalbuat = req.body.tanggal;
    const yang_didapat = req.body.dapat;
    const harga = req.body.harga;

    await Detail.create({
      judul: judul,
      desc_judul: desc_judul,
      tentang: tentang,
      desc_tentang: desc_tentang,
      target_audiens: target_audiens,
      desc_target: desc_target,
      kategori: kategori,
      desc_kategori: desc_kategori,
      masa_berlaku_lisensi: masa_berlaku_lisensi,
      desc_lisensi: desc_lisensi,
      tanggalbuat: tanggalbuat,
      yang_didapat: yang_didapat,
      harga: harga,
    });

    res.status(201).json({ msg: "Data Berhasil Di Buat" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const updateData = async (req, res) => {
  try {
    const judul = await Detail.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!judul) {
      return res.status(404).json({ msg: "Data tidak ada" });
    }

    const { nama, deskripsi } = req.body;

    if (!nama && !deskripsi) {
      return res.status(400).json({ msg: "Nama atau deskripsi harus diisi" });
    }

    let updateFields = {};

    if (nama) {
      updateFields.title = nama;
    }

    if (deskripsi) {
      updateFields.description = deskripsi;
    }

    await judul.update(updateFields);

    res.status(200).json({ msg: "Data Berhasil di Perbarui" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan server" });
  }
};

export const deleteData = async (req, res) => {
  const judul = await Detail.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!judul) return res.status(404).json({ msg: "Data tidak ada!" });

  try {
    await Detail.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Hapus" });
  } catch (error) {
    console.log(error.message);
  }
};
