import auth0 from "auth0-js";
import params from "./auth0-param.json";

const webAuth = new auth0.WebAuth({
  domain: params.domain,
  clientID: params.clientId,
  audience: params.apiAudience,
  redirectUri: params.callbackUrl,
  scope: params.scope,
  responseType: params.responseType,
});

export default webAuth;
