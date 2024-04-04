import { projectAuth } from "@/config/firebase";
import { ref } from "vue";
const user = ref(projectAuth.currentUser);
projectAuth.onAuthStateChanged(function (_user) {
  if (_user) user.value = _user;
});
function getUser() {
  return { user };
}

export function useUser() {
  return { user, getUser };
}
