const express = require('express');
const router = express.Router();
const { createNote, getNoteDetails, deleteNote, updateNote, getNotesByOwner } = require("../controller/noteController");

router.post('/note', createNote);
router.get('/note/:id', getNoteDetails);
router.delete('/note/:id', deleteNote);
router.put('/note/:id', updateNote);
router.get('/get-notes/:id', getNotesByOwner);


module.exports = router;