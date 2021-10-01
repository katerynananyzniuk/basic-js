import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  
  if (!Array.isArray(arr)){ throw new Error("'arr' parameter must be an instance of the Array!")
}
else {
    let next = "--discard-next"
    let prev = "--discard-prev"
    let dnext = "--double-next"
    let dprev = "--double-prev"
    let array = arr.slice()
    array.find((item)=>{
      let index = array.findIndex((item)=>{
        return item===next || item===prev || item===dnext || item===dprev
      })

      if (typeof(index) !== 'number') { array.splice(item,1)}

      else if (item === next){ array.splice(index,2)}

      else if (item === prev){ 
        if(index>0){ array.splice(index-1,2)} 
        else {array.splice(index,1)}
      }

      else if (item === dnext){ 
        if(index === array.length-1){ array.splice(index,1)} 
        else {array.splice(index,1,array[index+1])}
      }
        
      else if (item === dprev){
         if(index>0){array.splice(index,1,array[index-1])} 
         else {array.splice(index,1)}
      }
    })
    return array
  }
}
