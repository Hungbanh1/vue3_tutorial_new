import { ref } from "vue";
import { projectStorage } from "@/config/firebase";
import { useUser } from "./useUser";
// function async addRecord() {}
const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
  //tao du lieu
  const error = ref(null);
  const filePath = ref("null");
  const url = ref("null");
  async function uploadFile(file) {
    //path
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    console.log(filePath);
    //ref len tren firebase
    const fileRef = projectStorage.ref(filePath.value);
    try {
      //put
      const response = await fileRef.put(file);
      //get url
      url.value = await response.ref.getDownloadURL();
      //return url
      return url.value;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }
  return { error, filePath, url, uploadFile };
};
export default useStorage;
