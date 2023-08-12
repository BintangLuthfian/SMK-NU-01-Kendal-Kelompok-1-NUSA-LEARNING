import { Op } from "sequelize";
import AddUsers from "../models/addUserModal.js";
import bcrypt from 'bcrypt';


export const getAllAddUsers = async (req, res) => {
    try {
        const users = await AddUsers.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getByIdAddUsers = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await AddUsers.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const postAddUsers = async (req, res) => {
    const { nama_Lengkap, email, Nomor_Telepon, Tanggal_Lahir, negara, Tempat_Tinggal, password, confirmPassword } = req.body;
    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and confirmPassword do not match." });
        }
        const existingUsersWithEmail = await AddUsers.findAll({ where: { email: email.toLowerCase() } });
        if (existingUsersWithEmail.length > 0) {
            return res.status(400).json({ error: "Email is already registered." });
        }
        const existingUserWithTelepon = await AddUsers.findOne({ where: { Nomor_Telepon } });
        if (existingUserWithTelepon) {
            return res.status(400).json({ error: "Nomor Telepon is already registered." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await AddUsers.create({
            nama_Lengkap,
            email,
            Nomor_Telepon,
            Tanggal_Lahir,
            negara,
            Tempat_Tinggal,
            password: password,
        });
        res.status(201).json({ newUser, hashedPassword });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const editAddUsers = async (req, res) => {
    const { id } = req.params;
    const { nama_Lengkap, email, Nomor_Telepon, Tanggal_Lahir, negara, Tempat_Tinggal, password, confirmPassword } = req.body;
    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and confirmPassword do not match." });
        }

        const user = await AddUsers.findByPk(id);
        if (user) {
            // Check if a user with a similar email (case-insensitive) exists
            const existingUsersWithEmail = await AddUsers.findAll({
                where: {
                    email: email.toLowerCase(),
                    id: { [Op.ne]: id }, // Exclude the current user
                },
            });
            if (existingUsersWithEmail.length > 0) {
                return res.status(400).json({ error: "Email is already registered." });
            }
            const existingUserWithTelepon = await AddUsers.findOne({
                where: { Nomor_Telepon, id: { [Op.ne]: id } }, // Exclude the current user
            });

            if (existingUserWithTelepon) {
                return res.status(400).json({ error: "Nomor Telepon is already registered." });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            await user.update({
                nama_Lengkap,
                email,
                Nomor_Telepon,
                Tanggal_Lahir,
                negara,
                Tempat_Tinggal,
                password: password,
            });
            res.status(200).json({ message: "User updated successfully", hashedPassword });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteAddUsers = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await AddUsers.findByPk(id);
        if (user) {
            await user.destroy();
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};