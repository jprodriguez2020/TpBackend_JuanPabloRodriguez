const { animeService } = require('../services');

const createAnime = async (req, res) => {
    try{
        const { title, description, urlAnime, category, userId } = req.body;
        const result = await animeService.createAnime(title, description, urlAnime, category, userId);
        res.status(201).send(result);
    }catch(error){
        res.status(500).send("Error registering Anime.")
    }
}

module.exports = {
    createAnime,
}