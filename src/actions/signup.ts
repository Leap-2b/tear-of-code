import { UserType } from "@/server/utils";
import axios from "axios";

export async function signup(user: UserType) {
  try {
    const { data } = await axios.post("/api/signup", {
      user,
    });

    return { data };
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
}
