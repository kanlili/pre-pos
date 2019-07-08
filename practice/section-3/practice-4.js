'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let c=[];
    for(let item of collection){
      if(item.length>1){
       let {key,count}=split(item);
       push(c,key,count);
      }else{
      c.push(item);
      }
    }
   let arrays=count(c);//新C元素集合
   let array=[];
   var collectionB=objectB.value;
   for(int i=0;i<c.length;i++){
          for (int j=0;j<collectionB.length;j++){
               if (c[i].key==collectionB[j]&&c[i].count>3){
                 array.push({key:c[i].key,count:c[i].count-1});
                 break;
                }
                else{
                array.push({key:c[i].key,c[i].count});
                }
          }
       }
        return array;
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
