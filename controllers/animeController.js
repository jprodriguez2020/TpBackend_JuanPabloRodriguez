const { animeService } = require('../services');
const Anime = require("../models/anime");
const Chapter = require("../models/chapter");
const { default: mongoose } = require('mongoose');

const createAnime = async (req, res) => {
    try{
        const { title, description, urlAnime, category, userId } = req.body;
        const result = await animeService.createAnime(title, description, urlAnime, category, userId);
        res.status(201).send(result);
    }catch(error){
        res.status(500).send("Error registering Anime.");
    }
};

const parseId = (animeId) => {
  return mongoose.Types.ObjectId(animeId)
}

const getAnimes = async (req, res) => {
    try {
        const { category } = req.query;
        const result = await animeService.getAnimes(category);
        res.status(200).send(result)
    }catch(error) {
        res.status(500).send("An error occurred while listing the Animes.");
    }
};

const getAnimeChapters = async (req, res) => {
  try {
    const chapters = await Chapter.findAll({ _id: parseId(req.params.animeId) });
    res.status(200).send({ chapters });
  } catch (error) {
    res.status(500).send("An error occurred while finding the Chapters of Id Anime.");
  }
};


const updateAnime = async (req, res) => {
    try {
      await Anime.updateOne({ _id: parseId(req.params.animeId) }, { $set: { ...req.body } });
      res.status(201).send("Anime updated successfully!");
    } catch (error) {
      res.status(500).send("An error occurred while updating the Animes.");
    }
  };
  
  const deleteAnime = async (req, res) => {
    try {
      await Anime.deleteOne({ _id: parseId(req.params.animeId) }, { $set: { ...req.body } });
      res.status(201).send("Anime deleted successfully!");
    } catch (error) {
      res.status(500).send("An error occurred while deleting the Animes.");
    }
  };

module.exports = {
    createAnime,
    getAnimes,
    getAnimeChapters,
    updateAnime,
    deleteAnime
}