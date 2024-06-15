// function doSomething (){
//     document.write("Arbaaz")
// }
// setInterval("doSomething()", 1000);

function prinTime(){
    var now =new Date();
    var hours =now.getHours();
    var mins = now.getMinutes();
    var seconds = now.getMilliseconds();

    document.write(hours + ":" + mins + ":" +seconds+'<br>' );
}
setInterval("prinTime()", 1000)