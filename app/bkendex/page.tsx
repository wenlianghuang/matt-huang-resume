import { useEffect,useState } from 'react';
export default function Bkendex(){
    const [backendData,setBackendData] = useState('');
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://matt-huang-resume-backend.vercel.app/api/data');
            const data = await response.json();
            setBackendData(data.message);
        }
        fetchData();
    },[]);
    return(
        <div>
            <h1>前後端連接成功!</h1>
            {backendData ? (
                <p>{backendData}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}