
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('Health Check',()=>{
  it('should return 200', (done) => {
  chai.request('http://docker:3000')
  .get('/status')
  .end( function(err,res){
  console.log(res.body)
  expect(res).to.have.status(200);
  done();
  });
  });
 });