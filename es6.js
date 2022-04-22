
{
   {
      {
        {
          function a() {
            console.log('running in my scope');  
             }
           }
          }
        }
      }
a();

console.log('EMPTY SCOPE', this);

console.log(this);

function b() {
  console.log('GLOBAL',this);
}

a()
const c = () => {
  console.log('MY SCOPE',this);
};

const d = {
  b: function(){
    console.log('OBJECT CONTEXT', this);
  },
  c: () => {
    console.log('OWN CONTEXT', this);
  }}

d.b();
d.c();

const arr = [1, 2, 3, 4, 5];
const [first, ...otherNumbers] = arr;
console.log(first, otherNumbers);

const copy = [...otherNumbers];
console.log('spread', copy);

const obj = {name: 'bob', age: 50};
const {name, age: age} = obj;
console.log(name, age);

const copyObj = {age};
console.log('spread object', copyObj);


const getTrue = async () =>{
  const result = await p;
  return result;
};

console.log(getTrue());