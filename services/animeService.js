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

const getAnimes = async (category) => {
    let result;
    let list = {};
    try {
      if (category) { list.category = category; }
      const animes = await Anime.find(list);
      result = { status: 200, animes };
    } catch (error) {
      throw error;
    }
    return result;
  };

/* const getAnimeById = async (_Id) => {
    let result;
    try{
        result = await Anime.findById(_id);
        return result;
    }catch(error){
        throw error;
    }
}; */

const updateAnime = async (animeid) => {
  let result;
  try {
    const anime = await Anime.updateOne(
      { _id: animeid },
      {
        $set: { 
          title: anime.title, 
          description: anime.description, 
          urlAnime: anime.urlAnime, 
          category: anime.category
        },
      }
    );
    result = {
      status: 200,
      message: "Anime updated successfully",
    };
  } catch (error) {
    throw error;
  }
  return result;
};

const deleteAnime = async (animeid) => {
  let result;
  try {
    const anime = await Anime.updateOne({ _id: animeid });
    result = { status: 200, message: "Anime successfully removed", anime };
  } catch (error) {
    throw error;
  }
  return result;
};

module.exports = {
    createAnime,
    getAnimes,
    //getAnimeById,
    updateAnime,
    deleteAnime

}
