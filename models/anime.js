const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    title: { type: String, unique: true, lowercase: true, required: true },
    description: { type: String, lowercase: true, required: true },
    urlAnime: { type: String, required: true },
    category: { type: String, required: true },
    userOwner: { type: Schema.Types.ObjectId, ref: 'User' }, 
    chapters:[{ type: Schema.Types.ObjectId, ref: 'Chapter' }],
});

module.exports = mongoose.model('Anime', AnimeSchema);
