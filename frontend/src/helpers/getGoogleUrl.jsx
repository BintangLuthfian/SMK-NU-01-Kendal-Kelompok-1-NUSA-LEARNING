import google from "../constants/google";

function getGoogleOAuthURL(redirect_uri) {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: redirect_uri,
    client_id: google.GOOGLE_OAUTH_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      // "https://www.googleapis.com/auth/user.birthday.read",
      // "https://www.googleapis.com/auth/user.gender.read",
      // "https://www.googleapis.com/auth/user.phonenumbers.read"
    ].join(" "),
  };
  const qs = new URLSearchParams(options);
  return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthURL;
