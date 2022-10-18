// import { useState, useEffect } from 'react';
// import axios from 'axios';

// // 封装axios ，发送自定义的网络请求hook

// function useAuth(url) {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     // 利用axios请求
//     setLoading(true);
//     axios
//       .get(url)
//       .then((res) => setData(res))
//       .catch((error) => setError(error))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [url]); // 注意这里要传入参数url，代表url改变的时候才触发哦

//   return 123123;
//   //   return [loading, data, error]; // 直接返回变量
// }

// export default useAuth;
