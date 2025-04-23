import axios from "axios";

export async function signIn(email: string, password: string) {
  try {
    const response = await axios.post(`/api/signin`, { email, password });
    return response;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(`Серверээс ирсэн алдаа: ${err.response.data.message}`);
    }

    throw new Error("Алдаа гарлаа. Дахин оролдоно уу.");
  }
}
