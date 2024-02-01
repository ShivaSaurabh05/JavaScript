// 06. ***************************  Datatype Conversion   ********************************************

// var a = "33ab";
// console.log(typeof(a)) //string

// var a="33ab"
// var b=Number(a)
// console.log(b,typeof(b)) //NaN type:- number

// var a=null
// var b=Number(a)
// console.log(b,typeof(b)) // 0 type:- number

// var a=undefined
// var b=Number(a)
// console.log(b,typeof(b)) //NaN type:- number

// var a=false
// var b=Number(a)
// console.log(b,typeof(b)) //0 type:-number

// var a=true
// var b=Number(a)
// console.log(b,typeof(b))// 1 type:-number

// var a=""
// var b=Boolean(a)
// console.log(b,typeof(b)) //false type:- boolean

// var a=""
// var b=Number(a)
// console.log(b,typeof(b)) //0 type:- boolean

// var a=" "
// var b=Boolean(a)
// console.log(b,typeof(b)) //true type:- boolean

// var a=33
// var b=String(a)
// console.log(b,typeof(b)) // 33 type:- string

//Notes
//  "33"=> 33
//  "" => 0
//  "33abc"=> NaN
//  true => 1
//  false => 0
//  null => 0
//  undefined => NaN
//  0 => fasle
//  1 => true
//  "" => false
//  " " => true
//  "shiva" => true

// 07. ************************* operations ************************************

// let str1="hello"
// let str2=" shiva"
// let str3=str1+str2
// console.log(str3) // hello shiva

// console.log(1+2)// 3
// console.log("1"+2)// 12
// console.log(1+"2")//  12
// console.log(1+1+"2")//  22
// console.log("1"+2+2)//  122
// console.log(1+2+"2")// 32

// console.log(+true)// 1
// console.log(+"")//  0

// console.log("2">1)//    true
// console.log("02">1)//   true

// console.log(null==0)//    false
//console.log(null>0)// false(0>0)
//console.log(null>=0)//    true(0>=0)

//console.log(undefined==0)//    false
//console.log(undefined>0)// false
// console.log(undefined>=0)//    false

// 09.************ DataTypes *************************

// Primitive data tyep
// 7 types => string,number,boolean,null,undefined,symbol,Bigint

// Reference (non-primitive)
// array,objects,function

// 10. ************************** Memory *********************************

// Stack => all primitve data types
// Heap => all reference data types

//primitive data type
// let age=20
// let age2=age
// age2=age2+10
// console.log(age)//20
// console.log(age2)//30

// reference data type
// let userOne={
//     gamil:"shiva@gamil.com",
//     name:"shiva"
// }
// let userTwo=userOne
// userTwo.gamil="shiva30763@gmail.com"

// console.log(userOne)//  shiva30763@gmail.com
// console.log(userTwo)// shiva30763@gmail.com

// 12. ******************* Numbers and Math *****************************************

// const num = 400;
// console.log(num, typeof num); //type :- number

// const balance = new Number(400);
// console.log(balance, typeof balance); //type :- object

// console.log(balance.toFixed(2)); //400.00

// const comma = 10000000;
// console.log(comma.toLocaleString()); //   1,00,00,000

//maxValue
// const num=Number.MAX_VALUE
// console.log(num)

//minValue
// const num=Number.MIN_VALUE
// console.log(num)

// console.log(Math.random())// between 0 and 1
// console.log((Math.random()*10)+1)// between 1 and 10
// console.log(Math.floor((Math.random()*10)+1))// between int 1 to 10

// const min=10
// const max=20
// console.log(Math.floor(Math.random()*(max-min+1))+min)//   between int 10 and 20

// 14. *********************************** Arrays **********************************************

// const myArr=[0,2,true,3,"shiva",null,undefined]
// console.log(myArr,typeof myArr) // object

// const myArr2= new Array("shiva",1,true)
// console.log(myArr2,typeof myArr2) // object

// const myArr=[1,2,3]
// console.log(myArr)// 1 2 3

// myArr.push(6)
// console.log(myArr)// 1 2 3 6

// myArr.push(7)
// console.log(myArr)// 1 2 3 6 7

// myArr.pop()
// console.log(myArr)// 1 2 3 6

// myArr.unshift(8)
// console.log(myArr)// 8 1 2 3 6

// myArr.shift()
// console.log(myArr)// 1 2 3 6

// console.log(myArr.includes(9))//false
// console.log(myArr.indexOf(9))//-1

// const newArr=myArr
// console.log(newArr,typeof newArr)// [1,2,3,6] type:-object

// const newArr2=myArr.join()
// console.log(newArr,typeof newArr)// 1,2,3,6 type:-string

// ********************************* Slice and Splice ****************************************

// const myArr=[1,2,3,4,5,6]
// console.log("a",myArr)// [1,2,3,4,5,6]

// let s=myArr.slice(1,3)
// console.log(s)//[2,3]
// console.log("b",myArr)// [1,2,3,4,5,6]

// let s1=myArr.splice(1,3)
// console.log(s1)// [2,3,4]
// console.log("c",myArr)// [1,5,6]

// let s2=myArr.splice(2,0,"shiva",true,null)
// console.log(s2) // []
// console.log("d",myArr)  //d [ 1, 2, 'shiva', true, null, 3, 4, 5, 6 ]

// 15. ******************************************* Arrays *************************************************

// merge array

// const mcu=["ironman",'thor',"hulk"]
// const dcu=["superman","batman","flash"]
// const icu=["shaktiman","nagraj","krish"]

// mcu.push(dcu)
// console.log(mcu)// [ 'ironman', 'thor', 'hulk', [ 'superman', 'batman', 'flash' ] ]

// let h=mcu.concat(dcu,icu)
// console.log(h) //[ 'ironman', 'thor', 'hulk', 'superman', 'batman', 'flash','shaktiman','nagraj','krish' ]

// const h= [...mcu,...dcu,...icu]// spread operator
// console.log(h,typeof h)// [ 'ironman', 'thor', 'hulk', 'superman', 'batman', 'flash','shaktiman','nagraj','krish' ]

// const twoD_Array=[1,2,[3,4,5],6,[2,3,4,[3,43,2,2],1,3],5]
// const usable_2D_array = twoD_Array.flat(Infinity)
// console.log(usable_2D_array)
/*[
    1, 2, 3, 4,  5, 6,
    2, 3, 4, 3, 43, 2,
    2, 1, 3, 5
  ]
*/
// let s="shiva"
// let arr=s.split("")
// console.log(arr,typeof arr)// [ 's', 'h', 'i', 'v', 'a' ] object

// let a="aman"
// let arr2=Array.from(a)
// console.log(arr2,typeof arr2)// [ 'a', 'm', 'a', 'n' ] object

// 16. ***************** Objects ***********************************

// Object Singleton and Literals

// object literals  is below

// const sym=Symbol("symbol hai ji symbol")

// const user={                              // Object literal
//   firsName:"shiva",
//   "last Name":"saurabh",
//   "home":"sabnima",
//   sym:"in object",//this will give string type.
//   [sym]:"in object correct type",//this will give string type.
//   age:22,
//   location:"Bihar",
//   email:"shiva@google.com",
//   isLogged:false,
//   lastLoginDays:["Monday","Sunday"]
// }

// console.log(user.email)//shiva@google.com
// console.log(user["email"])//shiva@google.com

// console.log(user["last Name"])// saurabh
// console.log(user.home)// sabnima

// console.log(user.sym,typeof user.sym)// in object
// console.log(user[sym],typeof user[sym])// in object correct type

// user.email="changed@google.com"
// console.log(user["email"])

// Object.freeze(user)//will lock the user and no changes will be made further
// user.email="hello@google.com"
// console.log(user)

// user.newItem="new elements" // adding new elements to objects
// console.log(user)

// user.greeting=function(){
//   console.log("happy new year Js user.")
// }
// // console.log(user)
// console.log(user.greeting())

// user.greeting2=function(){
//   console.log(`hello ${this.firsName} how are you`)
// }
// console.log(user.greeting2())
// console.log(user)

// *********************************** Objects part-2 **********************************************

// Object singlton

// const tinderUser=new Object()//Singlton object
// console.log(tinderUser,typeof tinderUser)

// tinderUser.id="abc"
// tinderUser.name="samul"
// tinderUser.isLoggedIN=false

// console.log(tinderUser)

// const regularUser={
//   email:"shiva@gmail.com",
//   fullname:{
//     userfullname:{
//       firstname:"shiva",
//       lastname:"saurabh"
//     }
//   }
// }

// console.log(regularUser)

// console.log(regularUser.fullname.userfullname.firstname) //shiva

// console.log(regularUser["fullname"]["userfullname"]["firstname"]) //shiva

// const obj1={
//   1:"a",
//   2:"b"
// }
// const obj2={
//   4:"c",
//   3:"d",
// }

// const obj3={obj1,obj2}
// console.log(obj3) //object inside object

// const obj4=Object.assign({},obj1,obj2)    // assign(target,source)
// console.log(obj4)

// const obj5={...obj1,...obj2} //spread operator
// console.log(obj4)

// console.log(Object.keys(obj2)) // [3,4] return array of keys
// console.log(Object.values(obj2)) // [d,c] return array of values
// console.log(Object.entries(obj2)) // [ [ '3', 'd' ], [ '4', 'c' ] ]

// console.log(obj2.hasOwnProperty("5")) // fasle if not present and true if present

// 18 ************************** Object de-structure and JSON API ****************************************

// const course={
//   coursename:"js in hindi",
//   price:"999",
//   courseInstructor:"shiva"
// }

// const {coursename}=course
// console.log(coursename) //"js in hindi"

// const {coursename:cn}=course
// console.log(cn)// "js in hindi"

// ******************************

// function add(){
//   for(let i of arguments){
//     console.log(i)
//   }
// }
// add(1,2,3,4,5)

// function add2(a,b,...other){
//   console.log(other)
// }
// add2(1,2,3,4,5,6)//[3,4,5,6]

// const user={
//   userName:"shiva",
//   price:99
// }
// function handleObject(anyObject){
//   console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
// }

// handleObject(user)
// handleObject({
//   userName:"hello",
//   price:101
// })

// const myArray = [200,300,400]

// function returnSecondValue(array){
//   console.log(array[1])
// }
// returnSecondValue(myArray)

// ********************************   IIFE with object   *******************************

// ((user)=>{console.log(`hii,${user.userName}. your email is ${user.email}`)})(user={userName:"shiva",email:"shiva@gmail.com"})

// ********************************** Conditional Statement **********************************

// if([]){
//   console.log("empty array") // empty array
// }
// if({}){
//   console.log("empty object")// empty object
// }

// ************************************** Higher Order Fuunctions *****************************************

// **********  Map  ******************

// const map=new Map()

// map.set(1,"one")
// map.set(2,"two")
// map.set(1,"one")
// map.set(2,"two")

// console.log(map,typeof(map))  //Map(2) { 1 => 'one', 2 => 'two' } object

// const map2=new Map()

// map2.set(1,1)
// map2.set(2,1)
// map2.set(1,1)
// map2.set(3,1)

// for(const key in map2) { // not iterateable
// console.log(key)  // no output
// }

// console.log(map2) //Map(2) { 1 => 1, 2 => 1 }

// for (const key of map2) {
//   console.log(key) /*[ 1, 1 ]
//   [ 2, 1 ] */
// }

// for (const [key,value] of map2) {
//   console.log(key,":-",value) /*1 :- 1
//   2 :- 1 */
// }

// const myObject={
//   game1:"NFS",
//   game2:"GTA 5"
// }
// for (const [key,value] of myObject) { //object is not iterable by for of loop
//   console.log(key,":-",value)
// }

// const myObject={ // iterate through for in loop
//   js:"javaScript",
//   cpp:"C++",
//   rb:"rubby",
//   swift:"Swift",
//   py:"Python"
// }

// for (const key in myObject) {
// console.log(key) //give keys
// }

// for (const key in myObject) {
//   console.log(`${key} :- ${myObject[key]}`) //give keys
//   }

// *********************************  forEach loop *********************************************

// const coding = ["python", "js", "ruby", "java", "cpp"];

// coding.forEach((i)=>console.log(i))

// coding.forEach(function print(i){ //wrong writing do not write fn name here
//   console.log(i)
// })

// coding.forEach(function(i){
//   console.log(i)
// })

// coding.forEach(printEle) // give reference to the function
// function printEle(i){
//   console.log(i)
// }

// coding.forEach((item,index,arr)=>{
//   console.log(item,index)
//   console.log(arr)
// })

// const myCoding = [
//   {
//     courseNmae: "python",
//     price: 999,
//   },
//   {
//     courseNmae: "Js",
//     price: 990,
//   },
//   {
//     courseNmae: "CPP",
//     price: 987,
//   },
//   {
//     courseNmae: "SQL",
//     price: 243,
//   },
//   {
//     courseNmae: "DSA",
//     price: 9990,
//   },
// ];

// myCoding.forEach((i)=>{
//   console.log(i.courseNmae,":-",i.price)
// })

// ********************************************  Filter,map,reduce ***********************************************

// ***************** Filter *********************************

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myNums.filter((i)=>{if(i>5){console.log(i)}}) // 6,7,8,9,10

// const ele=myNums.filter((i)=>i>5)
// console.log(ele)  //[ 6, 7, 8, 9, 10 ]

// const ele2=myNums.filter((i)=>{return i>5}) // when we open scope we have to use return keyword
// console.log(ele2)  //[ 6, 7, 8, 9, 10 ]
//example:--------------
// const i = (num) => {
//   return num + 10;
// };
// console.log(i(10));
//----------------------

// const ele=[]
// myNums.forEach((num)=>{
//   if(num>5){
//     ele.push(num)
//   }
// })
// console.log(ele) //[ 6, 7, 8, 9, 10 ]

// const myArrayObject=[
//   {
//     userName:"shiva",
//     isLoggedIn:true
//   },
//   {
//     userName:"Aman",
//     isLoggedIn:true
//   },
//   {
//     userName:"Dev",
//     isLoggedIn:false
//   },
//   {
//     userName:"Leo",
//     isLoggedIn:true
//   }
// ]

// const LoggedIn=myArrayObject.filter((i)=>i.isLoggedIn==true)
// console.log(LoggedIn)

// const LoggedIn2=myArrayObject.filter((i)=>
// {
//   if(i.isLoggedIn==true){
//     return i.userName // print whole object
//   }
// }
// )
// console.log(LoggedIn2)

// ********************* Map ****************************

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const add=myNums.map((num)=>{return num+10})
// console.log(add)

// let arr=[]
// myNums.forEach((num)=>{arr.push(num+10)})
// console.log(arr)

// *********************************************************************************************************
// var expect = function(val) {
//   return {
//       x : val,
//       notToBe : function(key){
//           if (this.x === key) {
//               throw new Error("Equal");
//           }
//           return true;
//       },
//       toBe : function(key){
//           if (this.x !== key) {
//               throw new Error("Not Equal");
//           }
//           return true;
//       }
//   }
// };
// const hii=expect(5)
// console.log(hii)

// console.log(hii.toBe(5))

//              Functional Programming
// const radiusArr = [1, 2, 3, 4];
// function calculate(arr, logic) {
//   const ansArr = [];
//   arr.forEach((val) => {
//     ansArr.push(Math.round(logic(val)));
//   });
//   return ansArr;
// }

// function diameter(r) {
//   return r * 2;
// }

// const ans = calculate(radiusArr, diameter);
// console.log(ans);

//***********************************************************************************

// var a=new Date()
// console.log(a)
// console.log(a.toString())
// console.log(a.toLocaleString())
// console.log(a.toLocaleDateString())
// console.log(a.toLocaleTimeString())

// class Test{

//   get(){
//     this.sum=0
//     this.hello=98
//   }
//   display(){
//     let h=98
//     console.log(`${this.sum}`)
//     console.log(`${this.hello}`)
//     console.log(h)
//   }
// }

// const obj=new Test()
// obj.get()
// obj.display()

// const obj2=new Test()
// obj2.display()

// **************************  Events in JavaScript  ************************************

// ********************************** Inheritance  ********************************

// Single Inheritance

// class Test {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   display() {
//     console.log(`${this.a}+${this.b}`);
//   }
// }

// const x = new Test(10, 20);
// x.display();

// Multilevel inheritance

// class Test{
//   constructor(a,b){
//     this.a=a
//     this.b=b
//   }
// }

// class Add extends Test{
//   sum(){
//     this.sum=this.a+this.b
//   }
// }

// class Display extends Add{
//   dis(){
//     console.log(`sum of ${this.a} and ${this.b} is = ${this.a+this.b}`)
//   }
// }

// const x=new Display(10,20)
// x.sum()
// x.dis()

// Hierarchial Inheritance

// class Input{
//   constructor(a,b){
//     this.a=a
//     this.b=b
//   }
// }

// class Add extends Input{
//   add(){
//     this.sum=this.a +this.b
//   }
//   display(){
//     console.log(`Sum is ${this.sum}`)
//   }
// }

// class Sub extends Input{
//   sub(){
//     this.subtract = this.a - this.b
//   }
//   display(){
//     console.log(`subtraction is ${this.subtract}`)
//   }
// }

// let x=new Add(10,20)
// x.add()
// x.display()

// var y=new Sub(10,20)
// y.sub()
// y.display()

//  ***********************************************************************

// function

// 1.normal function

// function manoranjan(){
//   console.log("in function")
// }

// manoranjan()

// function manoranjan1(a,b){
//   return a
// }
// console.log(manoranjan1(1,2))

// 2. function expression

// const manoranjan=function(a,b){
//   return a
// }

// let x=manoranjan(10,11)
// console.log(x)

// 3. arrow function

// var mano=(a,b)=>{
//   return a
// }
// var x=mano(2,1)
// console.log(x)

// Objects

// var mano={
//   id:34364,
//   name:"Manoranjan Prasad",
//   age:23
// }

// var mano1={
//   "id":22,
//   "name":"mano"
// }
// console.log(typeof mano1)
// console.log(mano.id)
// console.log(mano.age)

// console.log(mano1["name"])

// mano.district="patna"

// console.log(mano)
// console.log(mano.district)

// mano.district="agra"
// console.log(mano)

// let arr=[1,1,1,2,3,4,2,1]

// var unqiueElements= new Object()

// arr.forEach(
//   (val,index)=>{
//     unqiueElements[val]=0
//   }
// )

// console.log(unqiueElements)

// class Test{
//   display(){
//     console.log("in display fn")
//   }
// }

// const b=new Test()
// b.display()

// class Add{
//   constructor(a,b){
//     this.a=a
//     this.b=b
//   }
//   display(){
//     console.log(`sum of ${this.a} + ${this.b} = ${this.a+this.b}`)
//   }
// }

// var object1=new Add(90,-10)
// object1.display()

// var object2=new Add()
// object2.getNum(20,90)
// object2.display()

// 1.Single Inheritance

/////////////////////////////////////////////

// const HII=function(){
//   console.log(`shiva saurabh _______`)
// }

// setTimeout(HII,4000)

// let heading = document.querySelector("h1");
// const change = function () {
//   heading.innerHTML = "change ho gya na jiii";
// };

// const changed = setTimeout(change, 3000);

// document.querySelector("#stop").addEventListener("click", function () {
//   clearTimeout(changed);
//   console.log("ruk gya na jii");
// });

// *******************************  Promises  **************************************

// const promiseOne = new Promise(function(resolve,reject){
//   // Do an Async task
//   // DB calls ,cryptography
//   setTimeout(function(){
//     console.log("Async task is comleted")
//     resolve()
//   },2000)
// })

// promiseOne.then(function(){
//   console.log("promise comsumed")
// })


// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log(`Async task 2`)
//     resolve()
//   },2000)
// }).then(function(){
//   console.log(`Async 2 Resolved`)
// })

// const promiseThree = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve({username:"Chai",email:"shiva@gmail.com"})
//   },1000)
// })
// promiseThree.then(function(user){
//   console.log(user)
// })


// const promiseFour = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error=true
//     if(!error)
//     resolve({username:"shiva",pass:123})
//     else
//     reject(`ERROR something went wrong`)
//   },1000)
// }).then(function(user){
//   console.log(user)
// }).catch(function(error){
//   console.log(error)
// }) // output will be :-- ERROR something went wrong

// const promiseFive=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error=false
//     if(!error){
//       resolve({username:"shiva saurabh",pass:123})
//     }
//     else{
//       reject("ERROR OCCURED")
//     }
//   },2000)
// }).then(function(user){
//   return user.pass
// }).then(function(userpass){
//   console.log(userpass)
// }).catch(function(error){
//   console.log(error)
// }).finally(()=>console.log(`the promise is either rsolved or rejted`))

// const promiseSix=new Promise((resolve,reject)=>{
//   setTimeout(function(){
//     let error=true
//     if(!error){
//       resolve({username:"shiva",pin:12345})
//     }
//     else{
//       reject(`Error happend`)
//     }
//   },1000)
// })


// async function activity(url){
//   let x=await fetch(url)
//   let y=await x.json()
//   console.log(y['activity'])
// }
// url="https://www.boredapi.com/api/activity"
// activity(url)

// let arr=[1,2,3]
// let newArr=arr.concat([6,7])
// console.log(newArr)
// arr.push([0,0,0])
// console.log(arr)


// let person={
//   name:"shiva",
//   greet:function(){
//     console.log(`hii ${this.name}`)
//   }
// }

// console.log(person)
// try{
//   console.log(r)
// }
// catch(error){
//   console.log(error.message)
// }


// let e;
// console.log(e)


// let arr=[1,2,4,3]
// console.log(typeof(arr))



// let r=false&& h()
// console.log(r)
// let r1=false || h() 
// console.log(r1)
// function h(){
//   console.log("hii")
//   return true
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//07.Math
// let x,y,z,maxi,mini;
// x = 3.14;
// y = 5;
// z = 9;
// console.log(Math.floor(x))
// console.log(Math.ceil(x))
// console.log(Math.pow(x,2))
// console.log(Math.sqrt(x))
// console.log(Math.abs(x))
// console.log(Math.max(x,y,z))
// console.log(Math.min(x,y,z))
// console.log(Math.PI)

//------------------------------------------------------------------
// user_input
// let user;
// user = window.prompt("enter name:");
// console.log(user)
// -------------------------------------------------------------------
// 08. hypotenuse
// let height,base,hypo;
// document.getElementById("calculate").onclick = function(){
//     height = document.getElementById("heightinput").value;
//     base = document.getElementById("baseinput").value;
//     hypo = Math.sqrt(Math.pow(base,2)+Math.pow(height,2));
//     document.getElementById("hypo").innerHTML = "hypo is:"+hypo;
// }
//--------------------------------------------------------------------
// 09.Counter Program
// let num;
// num =0;
// document.getElementById("Decrease-button").onclick = function(){
//     num-=1;
//     document.getElementById("count").innerHTML = num;
// }

// document.getElementById("Reset-button").onclick = function(){
//     document.getElementById("count").innerHTML = 0
//     num=0
// }

// document.getElementById("Increase-button").onclick = function(){
//     num += 1;
//     document.getElementById("count").innerHTML = num
// }
//------------------------------------------------------------------------
// 10.Random Number Game
// let x,y,z;
// x = Math.floor(Math.random()*10 +1);
// y = Math.floor(Math.random()*10 +1);
// z = Math.floor(Math.random()*10 +1);
// console.log(x,y,z);
// let x;

// document.getElementById("see").onclick = function(){
//     x = Math.floor(Math.random()*10);
//     document.getElementById("output").innerHTML = "Computer choice is: "+x;
// }
//--------------------------------------------------------------------------
// 11.Strings
// let user="shiva saurabh";
// let phone = "6287-223-223"

// length = user.length
// console.log(length)

// letter_at = user.charAt(0)
// console.log(letter_at)
// letter_at = user.charAt(5)
// console.log(letter_at)
// letter_at =user.charAt(6)
// console.log(letter_at)

// first_index_of = user.indexOf("s")
// console.log(first_index_of)
// last_indext_of = user.lastIndexOf("s")
// console.log(last_indext_of)

// console.log(user.toUpperCase())
// console.log(user.toLowerCase())

// console.log(phone.replace("-","--"))
// console.log(phone.replaceAll("-","--"))
//----------------------------------------------------------------------
// 12. string slicing
// let name;
// fullname = "shiva*saurabh"
// let first_name,last_name;

// first_name = fullname.slice(0,5)
// console.log(first_name)
// last_name = fullname.slice(6,fullname.length)
// console.log(last_name)

// first_name = fullname.slice(0,fullname.indexOf("*"))
// console.log(first_name)
// last_name = fullname.slice(fullname.indexOf("*")+1)
// console.log(last_name)
//----------------------------------------------------------------------
// 13.Method Chaining(we can call one method after another in one same line of code.)
// let user,newc;
// user = "shiva saurabh"
// newc = user.charAt(0).toUpperCase().
// console.log(newc)
//----------------------------------------------------------------------
// 14.if Statment

// let age;
// age = window.prompt("enter age")
// if(age>=20){
//     console.log("eligible")
// }
// else if(age<=0){
//     console.log("not born")
// }
// else{
//     console.log("not eligible")
// }

// let online=false;

// if(online){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
//----------------------------------------------------------------------
// 15.Checked Property
// document.getElementById("mybutton").onclick = function(){
//     const ischecked = document.getElementById("check").checked
//     if(ischecked==true){
//         console.log("Subscribed")
//     }
//     else{
//         console.log("Not Subscribe!!")
//     }
// }



// New Video


// Opertaot Precedence 1.34
// exponential right->left
// let x=2**3
// console.log(x)

// const currentYear=2025;
// console.log(currentYear-1991>currentYear-2001)

// let n1,n2;

// assingment operator right->left
// n1=n2=30-10-2;

// console.log(n1,n2);

// console.log(2+2/2)

// Strings

// const firstName="Shiva";
// const lastName="Saurabh";
// const birthYear=1990;
// console.log(firstName + " "+lastName,"is a boy. who born in",birthYear,".");

// Template String

// const strTemplate = `${firstName} ${lastName} is a boy. and is ${2023-birthYear} old.`
// console.log(strTemplate)

// If Else Condition in javaScript

// const age=14;

// if(age>=20){
//     console.log("Full age");
// }
// else{
//     console.log(`Minor, not valid for ${19-age} years.`);
// }


// Type Conversion-> Manual conversion by user

// const inputYear="1991"
// console.log(inputYear+18) // when we add a number to string or vice versa-> output is string.

// console.log(Number(inputYear),inputYear)

// console.log(Number(inputYear)+9)

// let num=34;
// console.log(String(num),num)

// console.log(num++)
// console.log(num)

// Type coercion

// console.log('captain jack is a '+32+' year old pirate.') // type coercion
// console.log('captain jack is a '+ Number('32')+' years old pirate.') //type conversion

//type coercion
// console.log("30"-"10"-5)

// console.log("30"*3)
// console.log("30"*'3')

// console.log("30"/3)
// console.log("30"/"3")

// let n='1'+1;
// n=n-1;
// console.log(n)










/// Bro code

// for (let i=0;i<=10;i++){
//     if(i==9){
//         break;
//     }
//     else if(i==7){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }


// for(let i=0;i<=10;i++){
//     for(let j=1;j<=2;j++){
//         console.log(`i[${i}]+j[${j}]=${i+j}`)
//     }
// }

// function

// function happyBirthday(){
//     console.log("shiva")
// }
// happyBirthday();

// let userName,age;
// userName="shiva saurabh";
// age=21;
// function greetUser(){
//     console.log(`Heloo ${userName} you are ${age} years old.`)
// }
// greetUser();

// function areaOfRectangle(height,base){
//     let area;
//     area=height*base;
//     return area
// }
// let height=3
// let base=9
// ans=areaOfRectangle(height,base)
// console.log(ans)

// Number Guessing game 
// const answer= Math.floor(Math.random()*10+1)
// let guesses=0

// document.getElementById("submitButton").onclick=function (){
//     let userAns=document.getElementById("guessFlied").value
//     guesses+=1

//     if(userAns==answer){
//         alert(` your ${answer} is correct. it took you ${guesses} guesses to win.`)
//     }
//     else if(userAns<answer){
//         alert("Too small")
//     }
//     else{
//         alert("Too Large")
//     }
// }


// document.getElementById("submitButton").onclick = function (){
//     var temp=document.getElementById("userInput").value
//     let celsius=document.getElementById("Celsius").checked
//     if(celsius){
//         document.getElementById("tempLabel").innerHTML=`${(Number(temp)-32)*(5/9)}`
//     }
//     else{
//         alert(`${((Number(temp)*9)/5)+32 }`)
//     }
//     console.log(celsius)
// }



// 32.Arrays

// let l=["apple","p","pie"]
// console.log(l[2]="ana")
// console.log(l)

// l.push("new")//add ele at end
// console.log(l)

// l.pop()//remove last ele
// console.log(l)

// l.unshift("first")//add ele to 0th index
// console.log(l)

// l.shift()//remove ele of 0th index
// console.log(l)  

// let length=l.length
// console.log(`length is ${length}.`)

// 33. loop throug an array

// let array=[1,2,3,4,5,6]

// for(let i=0;i<array.length;i++){
//     console.log(array[i])1,2,3,4,5,6
// }
// for(let i=array.length-1;i>=0;i--){
    // console.log(array[i])//6,5,4,3,2,1
// }
// for(let i in array){
    // console.log(array[i])//1,2,3,4,5,6
// }
// for(let i in array){
//     console.log(i)//0,1,2,3,4,5
// }
// for(let i of array){
//     console.log(i)//1,2,3,4,5,6
// }

//34.sort an array of strings

// let fruits=["banana","apple","orange","mango"]
// for(let fruit of fruits){
//     console.log(fruit)
// }
// console.log("---------------sorting----------------")
// fruits=fruits.sort()
// for(let i of fruits){
//     console.log(i)
// }

// console.log("-----------reverse sorting---------")
// fruits=fruits.sort().reverse()
// for(let i of fruits){
//     console.log(i)
// }

// 35. 2D arrays=an array of arrays

// let fruits=["apple","banana","oranges"]
// let vegetable=["potato","onions","carrots"]
// let cheese=["paneer","cheese"]

// let groceryList=[fruits,vegetable,cheese]

// for(let i=0;i<groceryList.length;i++){
//     for(let j=0;j<groceryList[i].length;j++){
//         console.log(groceryList[i][j])
//     }
// }

// for(let i of groceryList){
//     for(let j of i){
//         console.log(j)
//     }
// }

// for(let i of groceryList){
//     for(let j=0;j<i.length;j++){
//         console.log(i[j])
//     }
// }

//36. spread operator --> allows an iterable such as an array or string to be expanded
//                        in place where zero or more arguments are expected
//                        (unpacks the elements)

// let number=[1,2,3,8,4,5,6]
// console.log(number,typeof(number))//[1,2,3,4,5,6]
// console.log(...number)//1,2,3,4,5,6

// console.log(Math.max(number))//NaN

// let maximum=Math.max(...number)
// console.log(maximum)//8

// let class1=["shiva","aman","dev"]
// let class2=["shubham","shivam",'rudra']

// class1.push(class2)//['shiva', 'aman', 'dev', Array(3)]
// console.log(class1)//['shiva', 'aman', 'dev', Array(3)]

// class1.push(...class2)//['shiva', 'aman', 'dev', 'shubham', 'shivam', 'rudra']
// console.log(class1)//['shiva', 'aman', 'dev', 'shubham', 'shivam', 'rudra']

//37.rest parameters --> represents an indefinite number of parameters
//                       (packs arguments into an array)

// let a,b,c,d,e;
// a=3
// b=4
// c=5
// d=6
// e=7
// console.log(sum(a,b,e))

// function sum(...numbers){
//     let total=0
//     for(let i of numbers){
//         total+=i
//     }
//     return total
// }

// Objects in javaScript

// let car={
//     shiva1:1,//Properties
//     shiva:1,//Properties

//     draw:function(){ //Methods
//         console.log("Inside draw")
//     }

// }

// console.log("hi")


//sheryians coding school 

// HTML,XML --> markmup language
//javaScript,python --> Scripting language(interpreter based)
// java,c++ --> Programming language(compiler based)

//alert
// alert("alert")


// primitives(exact copy) and reference(refer value to other variable)


// PRIMITIVES--> aisi values Jinko copy karne par unki real copy hoti hai
//e.g:-> 
// var a=2
// var b=a
// b=b+1
// console.log(a) //-->2
// console.log(b) //-->3

//reference --> jab copy hoga tab real copy naa karke sirf original value ka refernce save kariye jiske wajah se jab bhi change hota hai,to 
// sirf main waale mein hota hai
//e.g:->
// var a=[1,2,3]
// var b=a
// b.pop()
// console.log(b) // [1,2]
// console.log(a) // [1,2]


// var a=[1,2,3]
// var b=a//reference
// var c=[...a]//primitive
// console.log(b)
// console.log(c)

// Conditional statement

// if('shiva'){
//     console.log("sh")
// }
// if(true){
//     console.log("jii")   
// }
// else{
//     console.log("zero")
// }
// if(0){
//     console.log("false")
// }
// else{
//     console.log("else excuted")
// }
// false,NaN,undefined,null,0,"" --> Falsy value


//loops (for,foreach,forin,while)
 
// for(let a=1;a<=5;a++){
//     console.log("Hello")
// }


// fib series code
// let first=0
// let second=1
// console.log(first)
// console.log(second)
// for(var a=1;a<8;a++){
//     let curr=first+second
//     console.log(curr)
//     first=second
//     second=curr
// }

// functions
// types of function or ways to create function
// 6 types

// 1.function statement
// function hii(){} //e.g
//---> calling--> hii()


// 2.function expression
// var a=function(){}
//---> calling-->a()


//3.anonymous function
// function(){}


//4.fat arrow function
//()=>{}
//-->calling--> 
// var a=(val)=>{console.log(val)}
// a(12)//output=12


//5.fat arrow with one parameter
//var a=(val)=>{}
// or
// var a=val=>{console.log(val)}
// a(14)


//6.fat arrow with implict return
// var a=()=>16
// a()


// arrays 

// var a=[1,2,3,4,5,6,7]

// console.log(a[6])
// console.log(a[10])//undefined


// delete a value in array. 

// var b=a.splice(4,1)
// console.log(b)
// console.log(a)



//objects --> jab ek elements ki saari details ho

// var colin={} //blank object

// var colin={
//     name:"collin", //property
//     material:"plastic", //property
//     price:70, //property
//     aachaHaiKya:false, //property
//     location:"dukan",  //property
     
// }

// console.log(colin.name)
// console.log(colin.material)
// console.log(colin.price)
// console.log(colin.aachaHaiKya)


// var a={
//     b:{
//         c:{
//             d:{
//                 e:12
//             }
//         }
//     }
// }

// console.log(a.b.c.d.e) //12


//   DOM

// pillars of dom

// 1.slection of element
// 2.changing HTML of element
// 3.changing CSS of element
// 4.EventListener

// var abc=document.querySelector("h1")

// abc.innerHTML = "modified"

// abc.style.color="red"
// abc.style.backgroundColor="black"

// abc.addEventListener("click",function(){abc.style.color="white"})


//card

//Add friend function
// var btn=document.querySelector("button")
// var flag=0
// btn.addEventListener("click",function(){
//     var b=document.querySelector("h5")
//     var card=document.querySelector("#card")
    
//     if(flag==0){
//         b.innerHTML="Friends"
//         b.style.fontSize="30px"
//         b.style.color="#1B4D3E"
//         btn.innerHTML="Remove Friend"
//         card.style.background="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(242,196,96,0.8100490196078431) 100%)"
//         flag=1
//     }
//     //remove friend function
//     else{
//         b.innerHTML="Stranger"
//         b.style.color="red"
//         btn.innerHTML="Add Friend"
//         card.style.background="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(21,230,217,0.4543067226890757) 100%)"
//         flag=0
//     }

// })





// **************************************** Promises in Js ************************************************

// Promise is an object representing eventual completion or failure of an asynchronous operations.



// ********************    Map(perform operation on all element) Reduce(return one element (may be one object or array)) Filter(true or false)  ********************************

// const arr=[1,2,3,4,5,6]

// function double(ele){
//     return ele*2
// }
// // let ans=arr.map(double)
// // console.log(ans)

// let ans=arr.map((ele)=>ele*3)
// console.log(ans)

// let ans1=arr.filter((ele)=>ele%2)
// console.log(ans1)

// let ans2=arr.reduce((acc,curr)=>acc+curr,0)
// console.log(ans2)

// let ans2=arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr
//     }
//     return acc
// },0)
// console.log(ans2)


// const users=[
//     {firstName:"shiva",lastName:"saurabh",age:28},
//     {firstName:"mano",lastName:"hjhj",age:20},
//     {firstName:"shiva",lastName:"saurabh",age:28},
//     {firstName:"sdfds",lastName:"saurabh",age:20},
//     {firstName:"sdfsda",lastName:"saurabh",age:108},
//     {firstName:"shgfs",lastName:"saurabh",age:18},
//     {firstName:"shgfs",lastName:"saurabh",age:13}
// ]

// let ans=users.map(function(obj){
//     return obj.age>20
// })
// console.log(ans)

// let ans1=users.filter(function(obj){
//     if(obj.age>20){
        
//     }
// })
// console.log(ans1)


// let ans3=users.reduce(function(acc,curr){
//     if(curr.age>=20){
//         acc.push(curr.firstName)
//     }
//     return acc
// },[])
// console.log(ans3)

// let ans1=users.filter((obj)=>obj.age>=20?obj.firstName:"")
// console.log(ans1)

// let ans2=users.filter((obj)=>obj.age>=20).map((obj)=>obj.firstName)
// console.log(ans2)

// let ans=users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]+=1
//     }
//     else{
//         acc[curr.age]=1
//     }
//     return acc
// },{})
// console.log(ans)
