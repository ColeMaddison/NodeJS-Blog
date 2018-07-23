const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

const appRoot = require('app-root-path').path;
const path = require('path');
// const app = '../app';
const app = 'http://localhost:3000';

chai.use(chaiHttp);


describe("Login system", () => {

    let cookie;

    before( (done) => {
        // Create user into DB
        // Remove all users from DB
        done();
    });

    it("Should login into system", (done) => {
        chai
            .request(app)
            .post('/api/auth')
            .send({
                email: 'test@user.com',
                password: 'test1',
            })
            .end( (err, res) => {
                if(err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.passport.should.be.a('object');
                res.body.passport.user.should.be.a('string');
                res.body.passport.user.should.be.eq('5b4b031f4b984529c5c41155');

                cookie = res.cookie['connected.sid'];
                done();
            });

    });

    it("Should logout", (done) => {
        done();
    });

    describe("Login system test", () => {
        it("Should logout 2", (done) => {
            done();
        });
    });

});