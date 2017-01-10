var path = require('path');
var config = require('./config');

module.exports = (app) => {

    /*
     ** Routes
     */
     
    app.use('/api/hello', require('../api/hello'));
    app.use('/api/user', require('../api/user'));
    app.use('/auth', require('../lib/auth'));




    /*
     **Catch all other routes and return the index file
     */

    app.get('/:url(api|auth|core|app|bower_components|assets)/*', (req, res) => {
        res.sendFile(`${config.root}/server/views/404.html`);
    });

    app.get('/:url(editor)/*', (req, res) => {
        res.sendFile(`${config.root}/${config.client}/editor.html`);
    });

    app.get('/*', (req, res) => {
        res.sendFile(`${config.root}/${config.client}/index.html`);
    });
};
