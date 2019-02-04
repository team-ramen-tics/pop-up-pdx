require('dotenv').config();
// require('../../lib/utils/connect')();
// const mongoose = require('mongoose');
// const request = require('supertest');
// const app = require('../../lib/app');
// const User = require('../../lib/models/User');

const { bearerToken } = require('../../lib/middleware/ensureAuth');

// const { tokenize } = require('../../lib/utils/token');

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
});
