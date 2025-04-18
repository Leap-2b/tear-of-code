import axios from "axios";

export async function signIn(email: string, password: string) {
  try {
    const response = await axios.post(`/api/signin`, { email, password });
    return response;
  } catch (err: any) {
    if (err.response) {
      throw new Error(err.response.data.message);
    }
    throw new Error("Error garlaa");
  }
}
