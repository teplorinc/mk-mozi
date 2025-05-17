import connectDB from '../database/db.js';

const db = connectDB();

const Reservation = {
    createReservation: async (last_name, first_name, email, kid_ticket, adult_ticket) => {
        await db.promise().query(
            'INSERT INTO reservation (last_name, first_name, email, kid_ticket, adult_ticket) VALUES (?, ?, ?, ?, ?)',
            [last_name, first_name, email, kid_ticket, adult_ticket]
        );
    }
};

export default Reservation;