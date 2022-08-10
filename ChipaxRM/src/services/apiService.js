import axios from "axios"
export const get = async url => {
    try {
      const { data, status } = await axios.get(url);
      return { ok: true, data, status };
    } catch (err) {
      return { ok: false, error: err, status: 500 };
    }
  };