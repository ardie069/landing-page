const path = require('path');

module.exports = {
    getIndexPage: (req, res) => {
        res.sendFile(path.resolve('views/index.html'));
    }
};