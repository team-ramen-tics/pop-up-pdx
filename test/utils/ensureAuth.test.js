require('dotenv').config();


const { bearerToken, ensureAuth } = require('../../lib/middleware/ensureAuth');

const { tokenize } = require('../../lib/utils/token');

describe('ensureAuth', () => {
  it('can get a token', () => {
    const req = { 
      get: () => 'bearer abc123'
    };
    const next = jest.fn();
    bearerToken(req, {}, next);
    expect(req.token).toEqual('abc123');
    expect(next).toHaveBeenCalled();
  });
  it('can ensureAuth', () => {
    const token = tokenize({ email: 'vissitor@gmail.com', role: 'visitor' });
    const req = { token };
    const next = jest.fn();
    console.log('ENSURE', req);

    return ensureAuth(['visitor', 'chef'])(req, {}, next)
      .then(() => {
        console.log('HERE', req);
        expect(req.user).toEqual({ email: 'vissitor@gmail.com', role: 'visitor' });
        expect(next).toHaveBeenCalled();
      });
  });

});
