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

module.exports = {
    createAnime,
}
