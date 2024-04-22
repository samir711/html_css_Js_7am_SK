// defining a function for Calculating Interest Amount

function CalculateInterest()
 {

   let p, r, t, intr, tamt; // Local variables 
   // data collection
   p=pamt.value;
   r=roi.value;
   t=time.value;
   // calc's
   intr = p * t * r / 100;
   tamt = +p + intr;

   //results
   interest.value="Interest Amount : "  + intr;
   totAmt.value="Total Amount : " + tamt;



}