const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    titleChapter: { type: String, unique: true, lowercase: true, required: true },
    description: { type: String, lowercase: true, required: true },
    urlChapter: { type: String, lowercase: true, required: true },
    animeOwner: { type: Schema.Types.ObjectId, ref: 'Anime' }, 
});

module.exports = mongoose.model('Chapter', ChapterSchema);
