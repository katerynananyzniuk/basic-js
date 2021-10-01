import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n){
  let arrFromN = n.toString().split('')
  let arrCopy = n.toString().split('')
  arrCopy = arrCopy.sort(function(a, b) { return a - b; })
  let number = arrCopy.slice(0,1)[0]
  arrFromN.find(function(item,index){
    if(item===number){ arrFromN.splice(index,1)}
  })
  return +arrFromN.join('')
}
