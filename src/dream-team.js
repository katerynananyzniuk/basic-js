import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(typeof(members) === 'object' && members !== null){
    if (Array.isArray(members)){
    let dreamTeam = []
    members.forEach((item)=>{
      if (typeof(item) === 'null') {return false}
      if (typeof(item)==="string"){
        item = item.trim()
        return dreamTeam.push(item[0].toUpperCase())
      }})
    dreamTeam = dreamTeam.sort().join("")
    return dreamTeam
    }
  }
  return false
}
