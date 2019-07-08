'use strict';

function countSameElements(collection) {
   let c=[];
   for(let item of collection){
     if(item.length>1){
      let {key,count}=split(item);
      push(c,key,count);
     }else{
     c.push(item);
     }
   }
  return count(c);
}
function split(ch){
  let arr=ch.split("-");
  return {key:array[0],count:parseInt(arr[1],10)};
}
function  push(c,key,count){
  for(int i=0;i<count;i++){
  c.push(key);
  }
}
function count(collec){
   let c=[];
     for(let item of collec){
        let ele=find(c,item);
        if(ele){
          ele.count++;
        }else{
        c.push({key:item,count:1});
        }
     }
 }
function find(collec,ch){
    for(let item of collec){
         if(item.key ==ch){
            return item;
         }
    }
     return null;
}
