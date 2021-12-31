import Hewan from "../models/Hewan.js";

export const getHewan = async (req, res) => {
  try {
    const hewan = await Hewan.findAll();
    res.send(hewan);
  } catch (err) {
    console.log(err);
  }
};

export const getHewanById = async (req, res) => {
  try {
    const hewan = await Hewan.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(hewan[0]);
  } catch (err) {
    console.log(err);
  }
};

export const createHewan = async (req, res) => {
  try {
    await Hewan.create(req.body);
    res.json({
      message: "Hewan Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateHewan = async (req, res) => {
  try {
    await Hewan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Hewan Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteHewan = async (req, res) => {
  try {
    await Hewan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Hewan was deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
