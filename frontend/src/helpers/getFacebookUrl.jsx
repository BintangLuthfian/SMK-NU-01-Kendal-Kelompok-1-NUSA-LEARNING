import facebook from "../constants/facebook";

function getFacebookOAuthURL(redirect_uri) {
  const rootUrl = "https://www.facebook.com/v15.0/dialog/oauth";

  const options = {
    redirect_uri: redirect_uri,
    client_id: facebook.FACEBOOK_APP_ID,
    response_type: "token",
    scope: ["email", "public_profile", "user_gender", "user_birthday"].join(
      " "
    ),
  };
  const qs = new URLSearchParams(options);
  return `${rootUrl}/?${qs.toString()}`;
}

export default getFacebookOAuthURL;
