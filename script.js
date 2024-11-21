// Créer une fonction isValidDate qui prend en paramètre une date en string 
// Determiner si elle est valide


/*function maxDaysInMonths31(jour){
 if (jour <= 31 & jour>= 1){
    return true
    
 } else {
    return false
 }
}
function maxDaysInMonths30(jour){
    if (jour <= 30 & jour>= 1){
       return true
       
    } else {
       return false
    }
   }
*/ 
   function maxMonthInYears(month){
    if (month <= 12 & month >= 1){
       return true
    } else {
       return false
    }
   }

   function isValidYears(years){
      if (years>999 && years<9999 ){
         return true
      } else {
         return false
      }
     }

     // console.log(isValidYears(678899))

// console.log(maxDaysInMonths30(31))

// console.log(maxDaysInMonths31(32))



function isValidDate(dateString) {
    // Découper la date au format "JJ/MM/AAAA"
    const table = dateString.split("/")
    const day= table[0]
    const month = table[1]
    const years = table[2]
    let maxDays;
    maxMonthInYears(month);
   if (month == 4 || month == 6 || month == 11 ||month == 9){
        maxDays=30;
   } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10){
        maxDays=31;
   }  else if(month == 2){
      maxDays = 29;
   } return day >= 1 && day <= maxDays && isValidYears(years);

 } 
// Tests 
// console.log(isValidDate("30/06/2024"))

// 

function isPalindrome(dateString){
   // Découper la date au format "JJ/MM/AAAA"
   const tableP = dateString.split("/")
   let sensNormal = tableP.join("")
   const sensNormalTable = sensNormal.split("")
   let sensInverse = tableP.reverse().join("")
   const sensInverseTable = sensInverse.split("")
   console.log(sensNormalTable)
   console.log(sensInverseTable)

   if(sensNormalTable[6] && sensNormalTable[7] == sensInverseTable[6] && sensInverseTable[7]){ 
      console.log("true")
      return true 
} else {
         console.log("false")
         return false 
      }
} 
isPalindrome("23/02/2032");
isPalindrome("20/11/2024");


