'use strict';

function collectSameElements(collectionA, objectB) {
  var c=new Array();
  var collectionB=objectB.value;
     for(int i=0;i<collectionA.length;i++){
       for (int j=0;j<collectionB.length;j++){
       if (collectionA[i]==collectionB[j]){
         c.push(collectionA[i]);
         break;
        }
       }
      }
       return c;
}
