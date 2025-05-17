import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
    const connection = mysql2.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected to the database!');

        // A kapcsolat leállítása a SIGINT jelre
        process.on('SIGINT', () => {
            connection.end((err) => {
                if (err) { 
                    console.error('Error disconnecting from the database:', err); 
                } else { 
                    console.log('Disconnected from the database!'); 
                }
                process.exit(0);
            });
        });
    });

    return connection;
};

export default connectDB;
