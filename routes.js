const path = require('path');

const express = require('express');
const expressSession = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(expressSession);
const config = require('./config');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsersModel = require('./api/users/users.model').model;

module.exports = (app) => {

    app.use(expressSession({
        secret: process.env.SECRET || config.secret,
        resave: false,
        saveUninitialized: false,
        unset: 'destroy',
        cookie: {
            maxAge: 60000
        },
        store: new MongoDBStore({
            uri: config.mongo.uri,
            collection: 'mySessions'
        })
    }));

    passport.use(new LocalStrategy( {
            usernameField: 'email',
            passwordField: 'password'
        },
        UsersModel.checkUser.bind(UsersModel)
    ));

    passport.serializeUser(
        UsersModel.serializeUser.bind(UsersModel)
    );

    passport.deserializeUser(
        UsersModel.deserializeUser.bind(UsersModel)
    );

    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/assets', express.static(path.join(__dirname, 'static')));

    app.get('/', (req, res) => {
        res.render('index.twig', {user: JSON.stringify(req.user)});
    });

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.use('/api', require('./api/index'));

    app.use( (err, req, res, next) => {
        console.error("SOME ERR", err);
        res.status(400).send({message: err && err.message ? err.message : err});
    });

};