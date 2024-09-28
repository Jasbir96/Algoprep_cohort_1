const mongoose = require("mongoose");
/****
**Create a Mongoose schema for a movie database that includes the following fields:**
- **title:** A required string field.
- **description:** A required string field.
- **releaseYear:** A required integer field.
- **genre:** A required string field with a predefined set of valid genres (e.g., Drama, Comedy, Action, Thriller, Horror, Romance, Sci-Fi, Animation, Documentary, Other).
- **rating:** An optional number field with a minimum of 1 and a maximum of 5.
- **cast:** An optional array of strings representing the cast members.
- **director:** An optional string field.
- **thumbnail:** An optional string field representing the URL of the movie's thumbnail.
- **trailerLink:** An optional string field representing the URL of the movie's trailer.
- **isPremium:** A boolean field indicating whether the movie is premium. The movie should be free if it's not premium.
 * 
 * 
 * 
 * **/

/*******************movieModel*********************/
const schemaRules = {
    title: { type: String, required: [true, "title is required"] },
    description: { type: String, required: [true, "description is required"] },
    releaseYear: { type: Number, required: [true, "release year is required"] },
    genre: {
        type: String,
        required: [true, "genre is required"],
        enum: ['Drama', 'Comedy', 'Action', 'Thriller',
            'Horror', 'Romance', 'Sci-Fi', 'Animation', 'Documentary', 'Other']
    },
    rating: { type: Number, min: [1, "rating should can't be less than 1"], max: [5, "rating should can't be more than 5"] },
    cast: [String],
    director: String,
    thumbnail: String,
    trailerLink: String,
    isPremium: { type: Boolean, default: false }

}

const movieSchema = new mongoose.Schema(schemaRules);


const MovieModel = mongoose.model("Movie", movieSchema);
// default export
module.exports = MovieModel;
