var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var schema = mongoose.Schema({

    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true,
        unique: true,
        default: 11
    },
    lang: {
        type: String,
        default: 'en'
    }

}, {
    versionKey: false,
    timestamps: true
}
);

schema.pre('save', function (next) {

    var cpf = this;



    if (cpf.isModified("password") || cpf.isNew) {

        bcrypt.genSalt(10, function (error, salt) {

            if (error) return next(error);



            bcrypt.hash(cpf.password, salt, function (error, hash) {

                if (error) return next(error);


                cpf.password = hash;

                next(null, cpf);
            });
        });

    } else {
        next(null, cpf);
    }
});

