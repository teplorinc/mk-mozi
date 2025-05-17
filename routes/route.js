import express from 'express';
import connectDB from '../database/db.js';
import Movie from '../models/movieModel.js';
import Reservation from '../models/reservationModel.js';

const router = express.Router();
const db = connectDB();

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.getRandomMovies();
        res.render('index', { movies });
    } catch (error) {
        console.error(error);
        res.render('error', { message: 'Hiba történt a filmek lekérdezésekor.' });
    }

});

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.getAllMovies();
        res.render('movies', { movies });
    } catch (error) {
        console.error(error);
        res.send('Hiba történt a lekérdezés során!');
    }
});

router.get('/buffet', (req, res) => { res.render('buffet'); });
router.get('/about', (req, res) => { res.render('about'); });

router.get('/reservation', (req, res) => {res.render('reservation');});
router.post('/reservation', async (req, res) => {
    const { last_name, first_name, email, kid_ticket, adult_ticket } = req.body;
    try {
        await Reservation.createReservation(last_name, first_name, email, kid_ticket, adult_ticket);
        res.render('reservation', { message: 'Sikeres foglalás!' });
    } catch (error) {
        console.error(error);
        res.render('reservation', { message: 'Hiba történt a foglalás során.' });
    }
});

export default router;