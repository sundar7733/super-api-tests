import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://api.tmsandbox.co.nz/v1/');
const url = `Categories/6327/Details.json?catalogue=false1`;
describe('Acceptance Criteria', () => {
    it('Check for Name = Carbon credits', () => {
        return request.get(url).then((res) => {
            expect(res.body.Name).to.equal("Carbon credits");
        });
    });
    it('Check for CanReslist =true', () => {
        return request.get(url).then((res) => {
            expect(res.body.CanRelist).to.equal(true);
        });
    });
    /* it('Check for Promotions Element with Name = "Gallery" has a Description that contains the text "2x larger image"', () => {
          return request.get(url).then((res) => {
              expect(res.body.Promotions).to.not.be.empty;
              res.body.Promotions.forEach((Promotions) => {
                  expect(res.body.Promotions[1].Name).to.equal("Gallery") && expect(res.body.Promotions[1].Description).to.equal("2x larger image");
              });
          });
      });*/
});