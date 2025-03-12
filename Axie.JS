async function GetuserQuest() {
    var Url = "https://x.skymavis.com/captcha-srv/check";
        var data={"app_key":"889a9cb7-3ffa-4113-9e3f-36558fe19808"};
    var M_Json = await fetch(Url, {
        method: "POST",
        headers: {
        },
        body:JSON.stringify(data)
    }).then((res) =>{
        return res.json()
    });
    return  await M_Json.id+","+M_Json.image}
async function PostQuest(id,index) {
    var r=["0","330","180","240","150","30","270","90"]
    var result=r[index]
    var Url = "https://x.skymavis.com/captcha-srv/submit";
    var data={"app_key":"889a9cb7-3ffa-4113-9e3f-36558fe19808","id":id,"result":result}
    var M_Json = await fetch(Url, {
        method: "POST",
        headers: {
        },
        body:JSON.stringify(data)
    }).then((res) =>{
        return res.json()
    });
    return  await M_Json.token}
