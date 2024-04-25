//defining non-param constructor

function Book(){

   //properties init
   this.title  = "C programming";
   this.author = "DR";
   this.price  = 300;
   this.pub    = "BHP";
  //method
  this.getBook = function() {
    document.write(`${this.title} &nbsp; ${this.author} &nbsp; ${this.price} &nbsp; ${this.pub} <br>`);

  }

}