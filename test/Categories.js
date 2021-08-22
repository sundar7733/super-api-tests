import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://api.tmsandbox.co.nz/v1/'); //Define API endpoint
const url = `Categories/6327/Details.json?catalogue=false1`; //Define url
describe('Acceptance Criteria', () => {
    it('Check for Name = Carbon credits', () => {
        return request.get(url).then((res) => {
            expect(res.body.Name).to.equal("Carbon credits"); //check for first acceptance criteria
        });
    });
    it('Check for CanReslist =true', () => {
        return request.get(url).then((res) => {
            expect(res.body.CanRelist).to.equal(true); //check for Second acceptance criteria
        });
    });
    it('Check for Promotions Element Criteria', () => {
        return request.get(url).then((res) => {

            expect(res.body.Promotions[1].Name).to.equal("Gallery"); //check for thrid acceptance criteria on first element
            expect(res.body.Promotions[1].Description).to.equal("2x larger image"); //check for third acceptance criteria on second element

        });
    });

});