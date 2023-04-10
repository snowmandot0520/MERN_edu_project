import Storage from 'src/services/Storage';

export const useAuth = () => {
  const token = Storage.getItem('token');
  if (token) {
    return true;
  } 
    return false;
  
};
