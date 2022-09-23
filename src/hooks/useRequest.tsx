// import { useState, useEffect } from 'react'


// const useRequest = (requestConfig, data) => {
//     const [loading, setLoading] = useState<boolean>(true);
//     const [result, setResult] = useState<string>('');
//     const [error, setError] = useState<string>('');

//     const request = async () => {
//         console.log('useRequest');
//         setLoading(true);
//         try {
            
            
//             requestConfig(data).then(result => {
//                 if (result && result.status >= 200 && result.status <= 304) {
//                     setResult(result.data);
//                 } else {
//                     setError('error');
//                 }
//             }).catch(err => {
//                 setError(err);
//             })
//         } catch {
//             setError('error');
//         }
//         setLoading(false);
//     };
//     useEffect(() => {
//         request();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return {
//         loading,
//         result,
//         error,
//     };
// };

// export { useRequest }