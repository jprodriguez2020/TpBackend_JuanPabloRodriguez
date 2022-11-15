const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    title: { type: String, unique: true, lowercase: true, required: true },
    description: { type: String, lowercase: true, required: true },
    urlAnime: { type: String, lowercase: true, required: true },
    category: { type: String, lowercase: true, required: true },
    userOwner: { type: Schema.Types.ObjectId, ref: 'User' }, 
    chapterAnime:{ type: Schema.Types.ObjectId, ref: 'Chapter' },
});

module.exports = mongoose.model('Anime', AnimeSchema);
