export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "https://spotify-clone-da841.web.app/";

const clientID = "563450ab8c35413faa269f9a24dee9b6";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  const parameters = window.location.hash.split("&");
  let access_code = null;
  for (let i = 0; i < parameters.length; i++) {
    let parts = parameters[i].split("=");
    if (parts[0] === "#access_token") {
      access_code = parts[1];
      break;
    }
  }
  return access_code;
};

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
