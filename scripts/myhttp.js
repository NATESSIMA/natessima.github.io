async function httpGet(URL) {
   try{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error('error HTTP: $response.status}'); 
        }
        const data= await response.json();
        return data;
    } catch(error) {
        console.error;

    }}
