const express = require("express");
const { createGuest, getGuests, getGuestById, updateGuest, deleteGuest } = require("../controllers/guests.controllers");
const router = express.Router();

// 방명록 C   post /guests
router.post("/", createGuest);

// 방명록 R   get /guests
router.get("/", getGuests);

// 방명록 U   put /guests:id
router.put("/:id", updateGuest);

// 방명록 D   delete /guests/:id
router.delete("/:id", deleteGuest);

module.exports = router;
