var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose

var schema = new Schema({
    id : {type: String, required: true},
    modele du cpu : {type: String, required: true},
    frequence cpu : {type: String, required: true},
    Taille adresse : {type: String, required: true},
    Memoire RAM : {type: String, required: true},
    Memoire libre : {type: String, required: true},
    Memoire potentiel : {type: String, required: true},
    Memoire active : {type: String, required: true},
    Memoire inactive : {type: String, required: true},
    Debit internet : {type: String, required: true},


    
});

exports.model = mongoose.model('Datas', schema, 'Data');
