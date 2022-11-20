const express = require('express');
const routes = express.Router();

const { isAuth } = require('../middlewares');
const { usersController, animeController, chapterController } = require('../controllers');
const { userSchema } = require('../controllers/schemas');

routes.post("/register", userSchema, usersController.register);
routes.post("/login", usersController.login);

routes.post("/anime", animeController.createAnime);
routes.get("/anime", animeController.getAnimes);
//routes.get("/anime:animeId", animeController.getAnimeById);
routes.put("/anime:animeId", animeController.updateAnime);
routes.delete("/anime/:animeId", animeController.deleteAnime);

routes.post("/chapter", chapterController.createChapter);
routes.get("/chapter", chapterController.getChapters);
//routes.get("/chapter:chapterId", chapterController.getChapterById);
routes.put("/chapter:chapterId", chapterController.updateChapter);
routes.delete("/chapter:chapterId", chapterController.deleteChapter);

module.exports = routes;

