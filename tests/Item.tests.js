const chai = require('chai');
const expect = chai.expect;
const ChaiHttp = require('chai-http');

chai.use(ChaiHttp);

describe('API service', function(){
    describe('GET methods', function() {
    it('Get all Items', function(done) {
        chai
    .request('http://localhost:3000')
    .get('/api/items')
    .end(function (err, resp) {
        expect(resp.status).to.be.eql(200);
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.not.be.eql(0);
        expect(resp.body[0]).to.be.eql({});
        done();
});
    });
});
   describe('POST methods', function(){
       it('POST request', function() {});
   })

    it('GET single task', function (done){
        const expected = [
    {
    id: 1,
    name: 'First task',
    status:'compeleted',
    },
        ];
    })
})
chai
.request('http://localhost:3000')
.get('/api/tasks/1')
.end(function(err, resp){
    expect(resp.status).to.be.eql(200);
    expect(resp.body).to.be.a('array');
    expect(resp.body.length).to.not.be.eql(0);
    expect(resp.body).to.be.eql(expeceted);
    done();
});
it('POST', function(done) {
    const newItem = {
        name: 'New Item',
    };
    const expeceted = { messsage: 'Added successfully!'};
    chai
    .request('http://localhost:3000')
    .post('/api/tasks')
    .send(newItem)
    .end(function (err, resp){
        expect(resp.status).to.be.eql(200);
        expect(resp.body).to.be.eql(expeceted);
        done();
    });
});



