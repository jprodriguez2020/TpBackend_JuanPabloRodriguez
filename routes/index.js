const express = require('express');
const routes = express.Router();
const { isAuth } = require('../middlewares');

const { usersController, animeController, chapterController } = require('../controllers');

const { userSchema } = require('../controllers/schemas');


routes.post("/login", usersController.login);
routes.post("/register", userSchema, usersController.register);

routes.post("/hi", isAuth, usersController.sayHi);

routes.post("/anime", animeController.createAnime);

// routes.get("/anime", (req, res) => {
//     res.send(animeController)
// })
//animeController.getAnime);


routes.post("/chapter", chapterController.createChapter);

module.exports = routes;

