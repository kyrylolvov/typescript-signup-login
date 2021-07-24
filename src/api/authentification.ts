import axios from "axios";

const url = "http://142.93.134.108:1111";

export default axios.create({
  baseURL: url,
});
