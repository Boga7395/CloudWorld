function GetAuthtoken(){a=document.cookie;p=a.match(/gaianet_access_token_(.*); /)[1]
m=p.match(/=(.*); gaianet/)[1]
return m}
async function ab(n){const c=GetAuthtoken();const data={"task_id":n};try{const response=await fetch("https://api.gaianet.ai/api/v1/reward/claim-task-completion/",{method:'POST',headers:{'Authorization':c,'Content-Type':'application/json'},body:JSON.stringify(data)});if(!response.ok){return await response.text();}
const result=await response.text();return await result;}catch(error){console.error('Error:',error);throw error;}}
function ss(n){return ab(n)}
