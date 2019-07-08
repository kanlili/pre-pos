'use strict';

function createUpdatedCollection(collectionA, objectB) {
 let c=[];
 for(let item of collection){
       let ele=find(c,item);
       if(ele){
         ele.count++;
       }else{
       c.push({key:item,count:1});
       }
 }
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
function find(collection,ch){
    for(let item of collection){
         if(item.key ==ch){
            return item;
         }
    }
     return null;
}
