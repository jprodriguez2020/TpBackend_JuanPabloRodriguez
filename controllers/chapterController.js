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

const getChapters = async (req, res) => {
    try {
        const { animeId } = req.query;
        const result = await chapterService.getChapters(animeId);
        res.status(200).send(result)
    }catch(error) {
        res.status(500).send("An error occurred while listing the Chapters of Anime.");
    }
};

const updateChapter = async (req, res) => {
    try {
      await Chapter.updateOne({ _id: req.params.chapterid }, { $set: { ...req.body } });
      res.status(201).send("Chapter updated successfully!");
    } catch (error) {
      res.status(500).send("An error occurred while updating the Chapter.");
    }
  };
  
  const deleteChapter = async (req, res) => {
    try {
      await Chapter.findByIdAndDelete(req.params.chapterId);
      res.status(201).send("Chapter deleted successfully!");
    } catch (error) {
      res.status(500).send("An error occurred while deleting the Chapter.");
    }
  };
module.exports = {
    createChapter,
    getChapters,
    updateChapter,
    deleteChapter
}