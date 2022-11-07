// Klassis bubblesort med JS
 
 
// Vår sorteringsfunktion
 function bblSort(arr){
  
// Loopa igenom vår array    
 for(var i = 0; i < arr.length; i++){
    
   // Kolla parvis 
   for(var j = 0; j < ( arr.length - i -1 ); j++){
    
    console.log(arr[j], arr[j+1]);

     // Kolla vilken som är störst
     if(arr[j] > arr[j+1]){
        console.log("Byter plats");

       // Om true, byt plats
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 // Skriv ut vår nya array
 console.log(arr);
}
 
 
// Här är vårt input
var arr = [524, 42, 108, 258,  45, 2, 7913, 800];
console.log(arr);

// Nu kallar vi på vår sorteringsfunktion
bblSort(arr);