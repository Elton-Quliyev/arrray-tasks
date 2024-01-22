// //1) Bir array’iniz  var ve bir funksiya yaradirsiz eğer arayın ici doludursa sonuncu elementi qaytaracaq eğer arrayin ici bosdusa ekrana -1 qaytaracaq

// let arr = [1,3,4,5,4,22]

// function yoxla(){
//     if(arr.length === 0){
//         console.log("-1")
//     }
//     else{
//         var son = arr.length - 1
//         console.log(arr[son])
//     }
// }
// yoxla()



// 2) Bir mix array’iniz var 30’dan boyuk ededleri artan sıra ile ekranda göstermek  

// arr = [50,45,12,18,49]
// arr2 = []

// for(let i=0 ; i<arr.length; i++){
//     if(arr[i]>30 == true){
//         arr2.push(arr[i])
//     }
// }



// 3) isdifadeci reqem daxil edir 4reqemli  ve reqemlerinin icinde 2 ve 3’cu reqemler eger cutduse  ekrana her ikisi cutdur cixacaq eğer biri tek biri cutdurse ekrana biri tek biri cutdur cixacaq eks halda her ikisi tekdise ekrana her ikisi tekdir cixacaq

// n = +prompt("ededi daxil edin")
// say = 0;
// m=n
// while(n>0){
//     k=n%10
//     say = say+1
//     n=n-k
//     n=n/10
// }

// if(say == 4){
//     k=m%10
//     m=m-k
//     m=m/10
//     a=m%10
//     m=m-a
//     m=m/10
//     b=m%10
//     console.log(a);
//     console.log(b);

//     if(a % 2 == 0 && b % 2 == 0){
//         console.log("her iki eded cutdur");
//     }
//     else if(a % 2 == 0 || b % 2 == 0){
//         console.log("ededlerden biri cutdur");
//     }
//     else{
//         console.log("ededlerden hec biri cut deyl");
//     }

// }    
// else{
//     console.log("get tezeden yaz");
// }    



//4)  Daxil olan ededden sonraki ilk n sade ededi tap
//  n = +prompt("ededi daxil edin")
// sadedir = true
 

// while (true) {
//     n++

//     if( n===1){
//         console.log("ne sadedir ne murekkeb");
//         break
//     }

//     for ( let i=2 ; i<n ; i++){
    
//     sadedir = true; 
//         if(n % i == 0){
//             sadedir = false 
//             break
//         }
//     }
    
//     if(sadedir){
//         console.log( n ,"eded sadedir");
//         break
//     }
    
// }


// 5)  n=7
// 1
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 

    
// for(let a=1 ; a<=7; a++){
//     for(let b=1; b<=a; b++){
//         document.write(b);

//     }
//     document.write("<br>")
// }

//6)ulduzdar
// for(let a=0 ; a<4; a++){
//     for(let b=0; b<5; b++){
//         document.write("*");

//     }
//     document.write("<br>")
// }




// // 7)  mix array verilib icinde stringleri ekrana cixardın
// let array = [1, "Hello", true, "World", 42, "JavaScript", false, "salam"];


// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i] === "string"){
//         console.log(array[i]);
//     }
// }





// 8)  mix(yəni string,null,{} və.s) array verilib  icinde ededleri ekrana cixardın 
// let array = [1, "Hello", true, "World", 42, "JavaScript", false, "salam"];


// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i] === "number"){
//         console.log(array[i]);
//     }
// }

// // 9)  bir array və içində bir neçə elementlər var içerisinde sonu 9’olan neçə element var
// let array = [29, 4 , "79", 59, 19, 92, 39, 99, 89];
// say = 0;

// for(let i = 0 ; i<array.length ; i++){

//     if(array[i] % 10 == 9){
//         say++
//     }
// } 
// console.log(say)



// // 10)  input ile daxil olunan ededin sade yoksa mürekkep oldugunu tapin
// n = +prompt("ededi daxil edin ...")
// sadedir = true

// for(let i=2 ; i<n ; i++){
    
//     if(n%i==0){
//         sadedir = false
//         break
//     }
// }

// if(sadedir){
//     console.log("eded sadedir");
// }
// else{
//     console.log("eded murekkebdir");
// }

// 11)  input ile daxil olunan ededin sade yoksa mürəkkəb oldugunu tapin
//10-cu sualin eynisidir


// 12)  input ile daxil olunan ededin reqemlerinnen en boyuyunu tapin

// n = +prompt("ededi daxil edin ...")
// let max = 0

// while(n>0){
//     k = n % 10

//     if(k > max){
//         max = k
//     }

//     n = n - k 
//     n = n / 10  
// }
// console.log("en boyuk eded = " , max);