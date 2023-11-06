import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
  audience: 'http://localhost:8000',
  issuerBaseURL: 'https://dev-zig1aact6y0c1317.us.auth0.com',
  tokenSigningAlg: 'RS256',
});

export default jwtCheck;
