function persion(name ,age){
    this.name = name;
    this.age = age;
}

var Arbaaz = new persion("Arbaaz chouhan",17);
var Adnan = new persion("Adnan",19);

document.write(Arbaaz.name + "<br>");
document.write(Adnan.age);