import { UserType } from "@/app/utils/types";
import axios from "axios";

export async function signup(user: UserType) {
  try {
    const { data } = await axios.post("/api/signup", {
      user,
    });
    return { data };
  } catch {
    return { error: "An unexpected error occurred" };
  }
}
