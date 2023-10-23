

//TASK 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.
/*
let a; let b; let c; {
  let d = b * b - 4 * a * c;

    if (d > 0) {
       const x1 = (-b + Math.sqrt(d)) / (2 * a);
       const x2 = (-b - Math.sqrt(d)) / (2 * a);
         console.log("İki həlli: x1 =", x1, "x2 =", x2);
    } else if (d === 0) {
        const x = -b / (2 * a);
        console.log("Tək həl: x =", x);
    } else {
       console.log("Həll yoxdur.");
    } }
 


 TASK 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
 let a;
 for (let i = 1; i <= 1000; i++) {
  if (i % a == 0) {
         console.log(i);
    }
 }

let arr = [2, 4, 5, 9, 1];

TASK 3. Bu massivin minimum elementini tapın: 

 let minElement = 0;

 for (let i = 0; i < a.length; i++) {
    if (a[i] < minElement) {
         minElement = a[i];
    }
} console.log("Minimum element:", minElement);

TASK 4.Bu massivin maksimum elementini tapın
 let maxElement = 0;
 for (let i = 1; i < a.length; i++) {
    if (a[i] > maxElement) {
        maxElement = a[i];
    }
 }

 console.log("Maksimum element:", maxElement);


 TASK 5. Bu massivin minimum elementinin indeksini tapın.

 let minIndex = 0; 
let minElement = a[0];


 for (let i = 1; i < a.length; i++) {
    if (a[i] < minElement) {
       minElement = a[i];
       minIndex = i; 
  }
 }

 console.log("Minimum elementin indeksi:", minIndex);


 TASK 6. Bu massivin maksimum elementinin indeksini tapın.

 let maxIndex = 0; 
 let maxElement = 0;


 for (let i = 0; i < a.length; i++) {
     if (a[i] > maxElement) {
       maxElement = a[i];
        maxIndex = i; 
    }
}
 console.log("Maksimum elementin indeksi:", maxIndex);

 TASK 7. Tək indeksli massiv elementlərinin cəmini hesablayın

let sub = 0;

 for (let i = 1; i < a.length; i += 2) {
   sub += arr[i]; }
 console.log("Tək indekslilerin cəmi:", sub);

 TASK 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

 let cumle = "Code Academy Tələbəsiyəm";
let cumleKicikHerf = cumle.toLowerCase();

 console.log(cumleKicikHerf);

 TASK 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

let cumle = "            Mən Code Academydə Programing tədrisi alıram            ";
let Cumle = cumle.trim();

 console.log(Cumle);
 TASK 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın

let cumle = "Mən Code Academy Tələbəsiyəm.";
 let sozler = cumle.split(" ");
 console.log(sozler);

 TASK 11. "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

 let cumle = "            Mən Code Academydə Programing tədrisi alıram            ";
let herfSayi = cumle.replace(/\s+/g, "").length;

console.log("Cümlədəki hərf sayı:", herfSayi);*/                                                                                                                          