import express from 'express';
import compression from 'compression';

/* eslint-disable no-console */

// If running from Heroku - use env.port, else 3000
const PORT = process.env.PORT || 3000;
const app = express();

app.use(compression());

//express middleware, redirect traffic from https to http
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

// which folder to serve
app.use(express.static('dist'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
})
