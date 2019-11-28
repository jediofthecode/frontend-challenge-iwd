/**
 * @param  {DateObject} date - A valid JS Date object
 * @return {String} A human friendly date
 * 
 * this function accepts a date object, and prints out a human
 * friendly format, this is a substiture for moment.js
 * EG: January 1, 2025
 * This does NOT support multi language
 */
export function getPrettyDate(date) {
  // put the months indo an array in the correct order
  const months = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};