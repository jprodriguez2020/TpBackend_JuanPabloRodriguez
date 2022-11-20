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

const getChapters = async (animeId) => {
    let result;
    let list = {};
    try {
      if (animeId) {
        list.animeId = animeId;
      }
      const chapters = await Chapter.find(list);
      result = { status: 200, chapters };
    } catch (error) {
      throw error;
    }
    return result;
  };

  const updateChapter = async (chapterId) => {
    let result;
    try {
      const chapter = await Chapter.updateOne(
        { _id: chapterId },
        {
          $set: { 
            title: chapter.title, 
            description: chapter.description, 
            urlChapter: chapter.urlChapter 
          },
        }
      );
      result = {
        status: 200,
        message: "Chapter updated successfully",
      };
    } catch (error) {
      throw error;
    }
    return result;
  };
  
  const deleteChapter = async (chapterId) => {
    let result;
    try {
      const chapter = await Chapter.updateOne({ _id: chapterId });
      result = { status: 200, message: "Chapter successfully removed", chapter };
    } catch (error) {
      throw error;
    }
    return result;
  };

module.exports = {
    createChapter,
    getChapters,
    updateChapter,
    deleteChapter
}