'use strict';

function createUpdatedCollection(collectionA, objectB) {
   let c=[];
   var collectionB=objectB.value;
   for(int i=0;i<collectionA.length;i++){
           for (int j=0;j<collectionB.length;j++){
           if (collectionA[i].key==collectionB[j]&&collectionA[i].count>3){
             c.push({key:collectionA[i].key,count:collectionA[i].count-1});
             break;
            }
            else{
            c.push({key:collectionA[i].key,count:collectionA[i].count});
            }
           }
   }
    return c;
}
