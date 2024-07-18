const { HomeModel } = require('../../core/bootstrap');

class HomeController {
    static home(req, res) {
        const data = HomeModel.getData();
        res.render('homeView', {
            title: data.title,
            description: data.description
        });
    }
}

module.exports = HomeController;