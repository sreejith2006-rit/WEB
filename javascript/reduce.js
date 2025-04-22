// arr=[1,2,3,4,5]
// let s=arr.reduce((a,c)=>{
//     return a+c
// },1)
// console.log(s)
a=[1,2,3,4,5,6,7,8,9]
let m=a.map( (number)=>{
    return number **2
})
let f=a.filter((n) =>{
    if(n%2==0){
        return true
    }
    else{
        return false
    }
})
let red=a.reduce((a,c)=>{
    return a+c
},0)
console.log(m,f,red)
a.sort()
console.log(a)
console.log(a.indexOf(1))
