const express = require('express');
const router = express.Router();
const {addNews, getNews, updateNews, deleteNews} = require('../controllers/UserController');  


router.post('/addNews', addNews); 
router.get('/getNews', getNews);   
router.put('/updateNews/:ID', updateNews); 
router.delete('/deleteNews/:ID', deleteNews);

module.exports = router;
