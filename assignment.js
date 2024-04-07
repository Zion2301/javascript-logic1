
// 1 cigar party
// function cigarParty(cigars, isWeekend){
//     if(cigars >= 40 && cigars <= 60 && !isWeekend) {
//       return true;
//   }
//     else if(cigars >= 40 && isWeekend) {
//       return true;
//     }
//     return false
// }

//2  squirrel play

// function squirrelPlay(temp, isSummer){
//   if((temp>= 60 && temp <= 90) && !isSummer){
//     return true;
// }
//   else if((temp >= 60 && temp <=100) && isSummer){
//     return true;
//   }
//   return false;
// }

// 3 caught speeding
// function caughtSpeeding(speed, isBirthday){
//     if (speed <= 60){
//       return 0;
//     }
//     else if ((speed >= 61 && speed <= 80) && !isBirthday){
//       return 1
//     }
    
//     else if((speed >= 81) && !isBirthday){
//      return 2;
//     }
//     else if (speed >=75 && isBirthday) {
//       return 1;
//     }
//     else{
//       return 0;
//     }
//   }

//4 sortasum
// function sortaSum(a, b){
//     if(a + b >= 10 && a + b <= 19){
//       return 20;
//     }
    
//     else {
//       return a + b;
//     }
//   }

//5 alarm clock
// function alarmClock(day, vacation){
//     if((day >= 1 && day < 6) && !vacation){
//       return "7:00";
//   }
//     else if((day === 0 || day === 6) && !vacation){
//       return "10:00";
//     }
//     else if((day >= 1 && day < 6) && vacation){
//       return "10:00";
//     }
//     return "off"
// }

//6 Love6
// function love6(a, b){
//     if(a == 6 || b == 6 || a + b == 6 || a - b == 6 || b - a ==6){
//     return true;
//     }
//     else {
//     return false;
//     }
//   }

//7 Special eleven
// function specialEleven(n){
//     if(n % 11 == 0 || (n % 11 == 0+1)){
//      return true;
//     }
    
//     else {
//      return false;
//     }
//   }

//8 more 20
// function more20(n){
//     if(n % 20 == 0+1 || n % 20 == 0+2){
//       return true
//     }
    
//     else {
//     return false
//     }
//   }

// 9  Old35
// function old35(n){
//     if((n % 3 == 0 || n % 5 == 0) && !(n % 3 == 0 && n % 5 == 0)){
//       return true;
//     }
//     else {
//      return false;
//     }
    
//   }

//10 near 10

// function nearTen(num){
//     if(num % 10 <= 2 || num % 10 >= 8){
//       return true;
//     }
//     else {
//       return false;
//     }
//   }

// 11 teensum

// function teenSum(a, b){
//     if((a >= 13 && a <= 19) || (b >= 13 && b <= 19)){
//       return 19;
//     }
//     else {
//       return a + b;
//     }
//   }

//12 answer cell
// function answerCell(isMorning, isMom, isAsleep){
//     if( isMorning == true && isMom == false && isAsleep == false){
//       return false
//     }
    
//     else if(isMorning == true && isMom == true && isAsleep == false){
//       return true;
//     }
    
//     else if (isMorning == false && isMom == true && isAsleep == false){
//       return true;
//     }
    
//     else if(isAsleep == true){
//      return false;
//     }
    
//     else {
//     return true;
//     }
//   }

//13 twoasone
// function twoAsOne(a, b, c){
//     if(a + b == c || b + c == a || a + c == b){
//       return true;
//     }
//     else {
//        return false;
//     }
//   }


//14 green ticket
// function greenTicket(a, b, c){
//     if(a != b && a != c && b != c){
//       return 0;
//     }
    
//     else if(a == b && a == c && b == c){
//       return 20;
//     }
    
//     else if(a == b || b == c || a == c){
//       return 10;
//     }
//   }

//15 red ticket
// function redTicket(a, b, c){
//     if(a ==2 && b == 2 && c == 2){
//       return 10;
//     }
    
//     else if(a ==b && a == c && b == c){
//       return 5;
//     }
    
//     else if(b != a && c != a){
//       return 1;
//     }
//     return 0;
//   }

//16 less20
// function less20(n){
//     if((n + 1) % 20 == 0 || (n + 2) % 20 == 0){
//        return true;
//     }
//      else {
//        return false
//      }
//    }

//17 date night
// function dateFashion(you, date){
//     if (you <= 2 || date <= 2) {
//        return 0;
//     }
   
//    else if (you >= 8 || date >= 8){
//      return 2;
//    }
   
//    else {
//      return 1;
//    }
//  }

// 18 lessby10
// function lessBy10(a, b, c){
//     if(a + 10 <= b || c + 10 <= b || b + 10 <= a || c + 10 <= a || a + 10 <= c || b + 10 <= c){
//        return true;
//     }
//     return false;
//   }

//19 blueticket
// function blueTicket(a, b, c){
//     if(a + b == 10 || b + c == 10 || a + c == 10){
//        return 10;
//     }
    
//     else if(a + b == 10 +(b + c) || a + b == 10 +(a + c)){
//       return 5;
//     }
//     return 0;
//   }
//20 in1to10
// function in1To10(n, outsideMode){
//     if(outsideMode && (n < 1 || n > 10)){
//       return true;
//     }
    
//     else if(n < 1 || n > 10){
//       return false;
//     }
    
//     else if(n >= 1 && n <= 10){
//       return true;
//     }
    
//     else {
//       return false
//     }
    
    
//   }

//21 fizzstring 2
// function fizzString2(n){
//     if(n % 3 == 0 && n % 5 != 0){
//       return "Fizz!"
//     }
    
//     else if(n % 5 == 0 && n % 3 != 0){
//       return "Buzz!"
//     }
    
//     else if (n % 3 == 0 && n % 5 == 0){
//       return "FizzBuzz!"
//     }
    
//     else {
//       return n.toString() + "!";
//     }
//   }

//22 fizzstring
// function fizzString(str){
//     if(str.startsWith("f") && !str.endsWith("b")){
//       return "Fizz";
//     }
    
//     else if (str.endsWith("b") && !str.startsWith("f")){
//       return "Buzz";
//     }
    
//     else if (str.startsWith("f") && str.endsWith("b")){
//       return "FizzBuzz";
//     }
    
//     else {
//        return str.toString();
//     }
//   }

//23 maxmod5
// function maxMod5(a, b){
  
//     if(a == b){
//       return 0;
//     }
//      else if(a % 5 === b % 5){
//       return Math.min(a, b);
//     }
    
//     else {
//        return Math.max(a, b);
//     }
//   }

// 24 lastdigit
// function lastDigit(a, b){
//     if( a % 10 == b % 10){
//       return true;
//     }
//     return false;
// }

// 25 tea party
// function teaParty(tea, candy){
//     if (tea < 5 || candy < 5) {
//          return 0;
//      } else if (tea >= 2 * candy || candy >= 2 * tea) {
//          return 2; 
//      } else {
//          return 1;
//      }
//  }

