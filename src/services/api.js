import axios from "axios";

export const novaPoshtaApi = axios.create({
  baseURL: "https://api.novaposhta.ua/v2.0/json/",
});

export const getData = async (body) => {
  try {
    const { data, status } = await novaPoshtaApi.post(
      `?apiKey=0c9ca93ae718edf5324990641e09dc39`,
      body
    );
    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${status}`);
    }
    return data;
  } catch (error) {
    alert(error.message);
    return error;
  }
};
