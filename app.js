import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import dotenv from 'dotenv';
import router from './routes/route.js';

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(expressEjsLayouts);
app.set('layout', 'layouts/layout');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});