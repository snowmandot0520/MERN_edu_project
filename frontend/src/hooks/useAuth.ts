import Storage from "../services/Storage";

export const useAuth = () => {
  const token = Storage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};
