require('../models/Datas');

var mongoose = require('mongoose'),
    Datas = mongoose.model('Datas');


var Data = {
    index: function (req, res) {

        Datas.find({}, function (err, Data) {
            if (err) throw err;

            // object of all the DATAS
            console.log(Data);
        });

        res.render('Data/index', {
            title: 'home',
            active: 'account'
        });
    },
    create: function (req, res) {

        var u = new Datas({
            name: req.body.name,
            firstName: req.body.firstname,
            email: req.body.email
        });

        u.save(function (err) {
            if (err) {
                console.log('Datas inserted');
            }
        });

        res.json(u);
    },
    update: function (req, res) {

        Datas.findById(req.params.id, function (err, Datas) {
            if (err) throw err;

            // change the DATAS location
            Datas.name = 'Josay';

            // save the DATA
            Datas.save(function (err) {
                if (err) throw err;

                console.log('Datas successfully updated!');
            });

        });

        res.render('Data/index', {
            title: 'home',
            active: 'account'
        });
    },
    delete: function (req, res) {

        Datas.findById(req.params.id, function (err, Datas) {
            if (err) throw err;

            // delete him
            Datas.remove(function (err) {
                if (err) throw err;

                console.log('Datas successfully deleted!');
            });
        });

        res.render('Data/index', {
            title: 'home',
            active: 'account'
        });
    }
};

module.exports = Data;