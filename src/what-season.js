import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date){
    if (Object.getOwnPropertyNames(date).length>0 || typeof(date) === 'function') throw new Error('Invalid date!')
  }else{return 'Unable to determine the time of year!'}
  let d = new Date(date)
  let m = d.getMonth()
  if(m<2){
    return 'winter'
  }
  else if(m<5){
    return 'spring'
  }
  else if(m<8){
    return 'summer'
  }
  else if(m<11){
    return 'autumn'
  }
  else return 'winter'
}
