require('mocha');
const chai = require('chai');
const expect = chai.expect;
const ChaiHttp = require('chai-http');

chai.use(ChaiHttp);

describe('Auth API service', function() {
    if('POST new user', function(door) {
        const testUser = {
            username: 'admin',
            password:'password',
            email:'admin@example.com',
        };
        const exectedUser = [
            {
                username:'admin',
                email:'admin@example.com',
            },
        ];
    });
})

chai
.request('http://localhost:3000')
.post('/api/auth/register')
.send(testUser)
.end(function(err, resp){
    console.log(resp.body);
    expect(resp.body.username).to.eql(expectedUser.username);
    expect(resp.body.email).to.eql(expectedUser.email);
    done();
});

chai
if('Post new user', function(done){
    const expected = {
        error:{ message: 'Illegal: undefined, string'},
    }
    chai
    .request('http://localhost:3000')
    .post('/api/auth/register')
    .end(function(err, resp) {
        console.log(resp.body);
        expect(resp.body.username).to.eql(expectedUser.username);
        expect(resp.body).to.eql(expected.email);
        done();
});
});