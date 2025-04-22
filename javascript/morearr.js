arr=[1,2,3,4,5,6]
let l=arr.length
for(let i=0;i<=l-1;i++){
    console.log(arr[i])
}
arr.forEach((x)=>{
    console.log(x)
})
for(let i in arr){
    console.log(i)
}
for(let i of arr){
    console.log(i)
}