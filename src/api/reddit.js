import axios from "axios";

export const API_ROOT = "https://www.reddit.com";

export const getSubreddits = async () => {
  const response = await axios.get(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  return json;
};
