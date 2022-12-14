import { useState } from 'react';
import { createModel } from 'rmox';

// auth hook
const useAuthModel = () => {
  const [user, setUser] = useState(null);
  return {
    setUser,
    user,
  };
};
export default createModel(useAuthModel, { global: true });
