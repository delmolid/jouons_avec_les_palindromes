// Créer une fonction isValidDate qui prend en paramètre une date en string 
// Determiner si elle est valide

   function maxMonthInYears(month){     // Fonction qui verifie si le mois est valide (utilisation d'une condition IF)
    if (month <= 12 & month >= 1){
       return true
    } else {
       return false
    }
   }

   function isValidYears(years){        // Fonction qui verifie si l'année est valide (utilisation d'une condition IF)
      if (years>999 && years<9999 ){
         return true
      } else {
         return false
      }
     }

function isValidDate(dateString) {     // Fonction qui verifie si le date est valide (utilisation d'une condition IF)
    // Découper la date au format "JJ/MM/AAAA"
    const table = dateString.split("/")   // Fonction qui decoupe la date en jour, mois et date 
    const day= table[0]              // Déclaration d'une variable et assignation à la valeur du jour
    const month = table[1]           // Déclaration d'une variable et assignation à la valeur du mois
    const years = table[2]           // Déclaration d'une variable et assignation à la valeur de l'année
    let maxDays;                    // Déclaration d'une variable et initiation à 0
    maxMonthInYears(month);          // Rappelle de la fonction maxMonthInYears(month) qui verifie la validité du mois 
   if (month == 4 || month == 6 || month == 11 ||month == 9){   // Condition 1 qui vérifie si le mois x fait parti des mois qui se terminent par 30
        maxDays=30;
   } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10){  // Condition 2 qui vérifie si le mois x fait parti des mois qui se terminent par 31
        maxDays=31;
   }  else if(month == 2){  // Condition 1 qui vérifie si le mois x correspond au mois de février 
      maxDays = 29;
   } return day >= 1 && day <= maxDays && isValidYears(years); // Condition 3 qui vérifie si le nombre des jour en fonction de chaque mois est valide ou pas et rappel de la fonction isValidYears(years)

 } 
// Tests 

// console.log(isValidDate("03/04/2001")) // true
// console.log(isValidDate("03/14/2001")) // false 

/* Créer une fonction isPalindrome qui prend une date en string en paramètre 
et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false. */

function isPalindrome(dateString){      // Fonction qui verifie si le date est valide (utilisation d'une condition IF)
   const tableP = dateString.split("/") // Fonction qui decoupe la date en jour, mois et date puis la stocke dans une variable                  /
   let sensNormal = tableP.join("")      // Fonction qui permet de lire la date dans un premier sens puis la stocke dans une variable
   let sensNormalTable = sensNormal.split("")  // Fonction qui decoupe les valeurs de la variable sensNormal puis la stocke dans une variable
   let sensInverse = [...tableP].reverse().join("")  // Fonction qui permet de lire la date dans le sens inverse puis la stocke dans une variable
   let sensInverseTable = sensInverse.split("")  // Fonction qui decoupe les valeurs de la variable sensInverse puis la stocke dans une variable   
   if( sensNormalTable[6] && sensNormalTable[7] === sensInverseTable[6] && sensInverseTable[7] ){  // Condition qui vérifie si le dernier index et l'avant-dernier index de la date sont similiaires lorsque on lit la date dans un sens et dans le sens inverse
   console.log("true")
                console.log(dateString)
                return true 
}       else {
                console.log("false")
                console.log(dateString)
                return false 
      }
} 
// TEST (The international standard for writing dates in English / Ecrire la date en format "Anglais")
 isPalindrome("04/02/2040") // True
 isPalindrome("11/02/2011") // true
isPalindrome("03/04/2001") // false 
isPalindrome("23/11/2024") // false
