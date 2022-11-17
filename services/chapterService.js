const Chapter = require("../models/chapter");
const Anime = require("../models/anime");

const createChapter = async (titleChapter, description, urlChapter, animeId) => {
    let result;
    try{
        const animeFound = await Anime.findById(animeId);
        if(!animeFound){
           return; 
        }
        const newChapter = new Chapter({ titleChapter, description, urlChapter, animeId });
        await newChapter.save();
        animeFound.chapters.push(newChapter._id);
        await animeFound.save();        
    }catch(error){
        console.log(error);
        throw error;
    }
    return result; 
}

module.exports = {
    createChapter,
}