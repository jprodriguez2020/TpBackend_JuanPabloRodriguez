const express = require('express');
const routes = express.Router();
const { isAuth } = require('../middlewares');

const { usersController, animeController, chapterController } = require('../controllers');

const { userSchema } = require('../controllers/schemas');


routes.post("/login", usersController.login);
routes.post("/register", userSchema, usersController.register);

routes.post("/hi", isAuth, usersController.sayHi);

routes.post("/anime", animeController.createAnime);
routes.get("/anime", animeController.getAnimes);
routes.get("/anime/:animeId", animeController.getAnimeById);


// routes.put("/anime/:id", animeController.updateAnime);
// routes.delete("/anime/:id", animeController.deleteAnime);

routes.post("/chapter", chapterController.createChapter);
// routes.get("/chapter", chapterController.getChapter);
// routes.put("/chapter/:id", chapterController.updateChapter);
// routes.delete("/chapter/:id", chapterController.deleteChapter);


module.exports = routes;

