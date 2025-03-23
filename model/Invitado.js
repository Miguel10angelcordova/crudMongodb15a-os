const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvitadoPrincipalSchema = new Schema({
    username: String,
    numero: Number,
    Npersonas: Number
}, { versionKey: false, collection: 'invitadoprincipal' });

module.exports = mongoose.model('InvitadoPrincipal', InvitadoPrincipalSchema);
