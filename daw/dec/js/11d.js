let m = function(x, y){
  return x * y;
};

let a = m(2,3);
console.log(a);

m = (x, y) => {
    return x * y;
}
console.log(m(3,4));

m = () => "Hola!";
console.log(m());