import { projectAuth } from "@/config/firebase";
import { ref } from "vue";
const error = ref(null);
const isPending = ref(false);
async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw new Error("Could not  create a new user");
    console.log(response);
    await response.user.updateProfile({ displayName: fullName });
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return { error, isPending, signup };
}
