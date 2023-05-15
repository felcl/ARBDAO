export function AddrHandle(addr, start = 4, end = 4) {
    if (!addr) {
      return;
    }
    let r = new RegExp("(.{" + start + "}).*(.{" + end + "})");
    let addrArr = addr.match(r);
    return addrArr[1] + "...." + addrArr[2];
}
export function GetQueryString(name,href){
  let search 
  if(href){
    search = href.split("?")
  }else{
    search = window.location.href.split("?")
  }
  let parameterArr
  if(search[1]){
    parameterArr = search[1].split('&')
    parameterArr = parameterArr.map(item=>{
      return item.split("=")
    })
    return Object.fromEntries(parameterArr)[name]
  }else{
    return null
  }
}