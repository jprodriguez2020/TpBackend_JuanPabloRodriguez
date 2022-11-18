const Anime = require("../models/anime");
const User = require("../models/user");

const createAnime = async (title, description, urlAnime, category, userId) => {
    let result;
    try{
        const userFound = await User.findById(userId);
        if(!userFound){
           return; 
        }
        const newAnime = new Anime({ title, description, urlAnime, category, userId });
        await newAnime.save();
        userFound.anime.push(newAnime._id);
        await userFound.save();
    }catch(error){
        console.log(error);
        throw error;
    }
    return result;
}
const getAnimes = async (req ,res) => {
    try{
        const anime = await anime.find();
        res.json({
            msg: 'Get Animes',
            title,
            description,
            urlAnime, 
            category,
            userId,
        });
    }catch(error){
        res.status(500).send({message: 'Error2', error});
    }
};

const getAnimeById = async (_Id) => {
    let result;
    try{
        result = await Anime.findById(_id);
        return result;
    }catch(error){
        throw error;
    }
};

module.exports = {
    createAnime,
    getAnimes,
    getAnimeById,

}
