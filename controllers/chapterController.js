const { chapterService } = require('../services');

const createChapter = async (req, res) => {
    try{
        const { titleChapter, description, urlChapter, animeId } = req.body;
        const result = await chapterService.createChapter(titleChapter, description, urlChapter, animeId);
        res.status(201).send(result);
    }catch(error){
        res.status(500).send("Error registering Chapter.")
    }
}

module.exports = {
    createChapter,
}