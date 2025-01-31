const News = require('../models/UserModel');

exports.addNews = async (req, res) => {
    try {
        const { Title, Info, Link } = req.body;
        const news = new News({ Title, Info, Link });
        const savedNews = await news.save();
        res.status(201).json(savedNews);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const { ID } = req.params;
        const { Title, Info, Link } = req.body;
        const updatedNews = await News.findByIdAndUpdate(
            ID,
            { Title, Info, Link },
            { new: true }
        );
        if (!updatedNews) {
            return res.status(404).json({ message: 'News not found' });
        } else {
            res.status(200).json({ message: 'News updated', updatedNews });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const {ID} = req.params
        const deletedNews = await News.findByIdAndDelete(ID);
        if (!deletedNews) {
            return res.status(404).json({ message: 'News not found' });
        }
        else {
            res.status(200).json({ message: 'News deleted'});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


