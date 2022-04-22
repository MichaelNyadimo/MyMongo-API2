const chai = require('chai');
const expect = chai.expect;
const ChaiHttp = require('chai-http');

chai.use(ChaiHttp);

describe('API service', function(){
    it('Logged on', (done) => {
        const expected = {
            user_id: '1',
            username:'admin',
            email:'admin@example.com',
        };
    })
})

chai 
.request('http://localhost:3000')
.get('/api/user/me')
.set('Authorization', 'Bearer ${token}')
.end((err, resp) => {
    expect(resp.body).to.eql(expected);
    done();
}
)

it.skip('PUT updated credentials', (done) => {
    const updatedUser = {
        username: 'admin',
        password: 'newPassword',
        email: 'admin@example.com',
    }
})

const expected = {msg: 'updated successfully'};

chai
.request('http://localhost:3000')
.put('api/user/me/update')
.set('Authorixation', 'Bearer ${token}')
.send(updatedUser)
.end((err, resp) => {
    expect(resp.body).to.eql(expected);
}
)

it('Logged in user', (done) => {
    const updatedUser = {
        username: 'admin',
        password:'newPassword',
        email: 'admin@example.com',
    }
}
)

chai
.request('http://localhost:3000')
.put('api/user/me/udate')
.set('Authorixation', 'Bearer ${token}')
.send(updatedUser)
.end(err, resp); {
    expect(resp.body).to.eql(expected);
    done();
};