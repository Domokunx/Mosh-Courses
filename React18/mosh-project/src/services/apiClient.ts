import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dda95b4ded804afda4f81a52631a9b76",
  },
});