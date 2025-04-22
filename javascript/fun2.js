// // let obj={
// //     fname:"sree",
// //     lname:"jith",
// //     greet:() => console.log("good morning")


// // }
// // let obj2=obj
// // console.log(obj2)
// let arr=[1,2,3,4,5];
// console.log(arr);
// let brr=new Array("rr",2,3);
// console.log(brr)
// let str=new String("hello world")
// console.log(str)
// console.log(arr[3])
// arr.push(9);
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.shift();
// console.log(arr)
// arr.unshift(5);
// console.log(arr)
// console.log(arr.slice(2))
// frr=[1,2,3,4,5,6];
// frr.splice(3,2,10);
// console.log(frr)
// lrr=[1,2,3,4,5,6,7];
// lrr.splice(4,2,20)
// console.log(lrr)
// k=[10,25,36,5,6,7]
// k.splice(4,2,30);
// console.log(k)
// r=[]
// r.push(0);
// console.log(r)
arr=[1,2,3];
let n=arr.map((number) => 
    {return number*number})
console.log(n)
brr=[1,2,3,4];
// brr.map((x,i) => {
//     console.log(x,i)
// })
let s=brr.filter((x) =>{
    if(x%2==0){
        return x
    }
})
console.log(s)
urr=[1,2,"sree"];
let r =urr.filter((val) =>{
    if(typeof(val)=="string"){
        return true
    }
})
console.log(r)