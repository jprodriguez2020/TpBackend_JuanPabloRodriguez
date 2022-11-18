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

const getAnimes = async (req, res) => {
    try{
        const animes = await Anime.find();
        res.status(200).send(animes);
    }
    catch(error){
        res.status(500).send({message: 'Something went wrong', error});
    }
};

const getAnimeById = async (req, res) => {
    const {anime} = req.params;
    try{
        const result = await animeService.getAnimeById(anime);
        res.status(200).send(result);
    }
    catch(error){
        res.status(500).send({message: 'Something went wrong', error});
    }
};

module.exports = {
    createAnime,
    getAnimes,
    getAnimeById,
}