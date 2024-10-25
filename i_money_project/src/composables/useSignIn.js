import { projectAuth } from "@/config/firebase";
import { ref } from "vue";
const error = ref(null);
const isPending = ref(false);
async function signin(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignIn() {
  return { error, isPending, signin };
}
