'use strict';

function collectSameElements(collectionA, collectionB) {
  var c=new Array();
   collectionB=collectionB[0];
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
