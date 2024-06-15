// Global-Variables => global variables  can we use inside the function also and 
// global variable  can  we used outside the function

var a = "my name is Arbaaz chohan"
function fn(){
    document.write(a+ "<br>");
}
fn();
document.write(a + "<br>");

//Local-Variables => local variable we use onle inside we use out side the function and 
// not show out beacuse local variable use only inside the variable

 function fn1 (){
    var b = "Arbaaz chouhan"
    document.write(b+"<br>")
 }
 fn1();
 document.write(b);
 
 function fn2 (){
    var c = "Danis khan"
   }
 document.write(c  + "<br>")