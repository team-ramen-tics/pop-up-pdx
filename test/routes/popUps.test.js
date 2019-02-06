const app = require('../../lib/app');
const request = require('supertest');
const { getToken, getPopUps, getPopUp } = require('../dataHelpers');

describe.only('routes for popup', () => {
  it('can create a popup', () => {
    return request(app)
      .post('/popups')
      .set('Authorization', `Bearer ${getToken()}`)
      .send({
        name: 'Jun Jun',
        date: '2.28.2019',
        time: '12PM',
        food: 'Asian',
        address: '950 SW Alder St, Portland, OR',
        zipcode: '97205'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          chef: expect.any(String),
          __v: 0,
          name: 'Jun Jun',
          date: '2.28.2019',
          time: '12PM',
          food: 'Asian',
          address: '950 SW Alder St, Portland, OR',
          zipcode: '97205'
        });
      });

  });
  it('can get a list of popups', () => {
    return request(app)
      .get('/popups')
      .then(res => {
        return Promise.all([
          Promise.resolve(res.body),
          getPopUps()
        ]);
      })
      .then(([body, popUps]) => {
        expect(body).toHaveLength(popUps.length);
      });
  });

  it('can get popup by id', () => {
    return getPopUp()
      .then(foundPopUp => {
        return request(app)
          .get(`/popups/${foundPopUp._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          photoUrl: expect.any(String),
          chef: expect.any(String),
          name: expect.any(String),
          date: expect.any(String),
          time: expect.any(String),
          food: expect.any(String),
          address: expect.any(String),
          zipcode: expect.any(String),
          _id: expect.any(String),
          __v: 0

        });
      });
  });

  it('can delete popUp by id', () => {
    return getPopUp()
      .then(deletePopUp => {
        return request(app)
          .delete(`/popups/${deletePopUp._id}`)
          .set('Authorization', `Bearer ${getToken()}`)
          .send({ deleted: 1 });
      })
      .then(res => {
        expect(res.body).toEqual({ deleted: 1 });
      });
  });

  it('can patch a pop up', () => {
    return getPopUp()
      .then(thePopUp => {
        return request(app)
          .patch(`/popups/${thePopUp._id}`)
          .set('Authorization', `Bearer ${getToken()}`)
          .send({ time: '4 pm' });
      })
      .then(res => {
        expect(res.body).toEqual({
          photoUrl: expect.any(String),
          date: expect.any(String),
          name: expect.any(String),
          chef: expect.any(String),
          time: '4 pm',
          food: expect.any(String),
          address: expect.any(String),
          zipcode: expect.any(String),
          _id: expect.any(String),
          __v: 0

        });
      });
  });

 
});

