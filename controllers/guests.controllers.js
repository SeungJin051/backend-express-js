const Guest = require("../models/Guest");

const taskController = {};

// Create - 방명록 추가
taskController.createGuest = async (req, res) => {
  try {
    const { name, msg } = req.body;
    const newGuest = new Guest({ name, msg });
    await newGuest.save();
    return res.status(201).json({
      status: "ok",
      data: newGuest
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      error: err.message
    });
  }
};

// Read - 모든 방명록 조회
taskController.getGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    return res.status(200).json({
      status: "ok",
      data: guests
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      error: err.message
    });
  }
};

// Update - 특정 방명록 수정
taskController.updateGuest = async (req, res) => {
  try {
    const { name, msg } = req.body;
    const updatedGuest = await Guest.findByIdAndUpdate(
      req.params.id,
      { name, msg },
      { new: true, runValidators: true }
    );
    if (!updatedGuest) {
      return res.status(404).json({
        status: "fail",
        message: "Guest not found"
      });
    }
    return res.status(200).json({
      status: "ok",
      data: updatedGuest
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      error: err.message
    });
  }
};

// Delete - 특정 방명록 삭제
taskController.deleteGuest = async (req, res) => {
  try {
    const deletedGuest = await Guest.findByIdAndDelete(req.params.id);
    if (!deletedGuest) {
      return res.status(404).json({
        status: "fail",
        message: "Guest not found"
      });
    }
    return res.status(200).json({
      status: "ok",
      message: "Guest deleted successfully"
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      error: err.message
    });
  }
};

module.exports = taskController;
