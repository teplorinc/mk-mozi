import connectDB from '../database/db.js';

const db = connectDB();

const Movie = {
    getRandomMovies: async () => {
        const [rows] = await db.promise().query('SELECT * FROM movies ORDER BY RAND() LIMIT 4');
        return rows;
    },
    getAllMovies: async () => {
        const [rows] = await db.promise().query('SELECT * FROM movies');
        return rows;
    },
};

export default Movie;