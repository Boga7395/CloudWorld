async function PrimeintellectTalk(Url,problem,_id){var url=await Url;var data=await{"messages":[{"role":"user","content":problem}],"id":_id,"modelId":"intellect-1"};await fetch(url,{method:"POST",headers:{},body:JSON.stringify(data)}).then(response=>response.text()).then(data=>{P=data});console.log(status)
if(P!=""&&status==200){console.log('进来了')
return"发送成功,"+P}else{return"发送失败正在冷启动"}}