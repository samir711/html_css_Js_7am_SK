// defining a function to find grade of student

function getResult(){

    let hm, cm, jm, bm, tot, avg, grd;   // local variables

    //data coll
    hm=+html.value;
    cm=+css.value;
    jm=+js.value;
    bm=+bs.value;

    //Calcuation 
    tot=hm + cm + jm + bm;
    avg=tot / 4;

    //Grade finding

     if(hm> 39 && cm > 39 && jm > 39 && bm > 39) {
       //pass
       grd = avg >=90 ? "A+" : avg >=80 ? "A" : avg >=70 ? "B+" : avg >= 60 ? "B" : avg >= 50 ? "C" : "D";           
   
     } else {
        grd = "Fail";
     }
     //displaying results
     total.value = "Total Marks : " + tot;
     average.value = "Average : " + avg;
     grade.value="grade : " +grd


}