// let count=0;
// setTimeout(() => {
//     console.log(++count);
//     setTimeout(() => {
//         console.log(++count);
//         setTimeout(() => {
//             console.log(++count);
//             setTimeout(() => {
//                 console.log(++count);
//                 setTimeout(() => {
//                     console.log(++count);
//                     setTimeout(() => {
//                         console.log(++count);
//                         setTimeout(() => {
//                             console.log(++count);
//                             setTimeout(() => {
//                                 console.log(++count);
//                                 setTimeout(() => {
//                                     console.log(++count);
//                                     setTimeout(() => {
//                                         console.log(++count);
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Example-2

// setTimeout(()=>{
//     console.log("A");
//     setTimeout(()=>{
//         console.log("E");
//         setTimeout(()=>{
//             console.log("I");
//             setTimeout(()=>{
//                 console.log("O");
//                 setTimeout(()=>{
//                     console.log("U");
//                 },4000)
//             },5000)
//         },2000)
//     },3000)
// },1000)

// promise example-----

// let promise=new Promise((resolve,reject)=>{
//     let a=10;
//     let b=10;

//     if(a===b)
//     {
//         resolve();
//     }
//     else
//     {
//         reject();
//     }
// });

// promise.then(()=>{console.log("promise resolve")}).catch(()=>{console.log("promise reject")});


// promise example 2 --

// let promise=()=>{
//     return new Promise((resolve,reject)=>{
//         let a="NIYAZ";
//         let b="NIYAZ";

//         if(a===b)
//         {
//             resolve();
//         }
//         else
//         {
//             reject();
//         }
//     });
// }

// promise().then(()=>{console.log("promise resolve for NIYAZ")}).catch(()=>{console.log("promise reject for NIYAZ")});


// promise example --3

// let promise=()=>{
//     return new Promise((resolve,reject)=>{
//           let name1="NIYAZ";
//           let name2="NIYAZ";

//           if(name1===name2)
//           {
//             resolve("second way to solve promise");
//           }
//           else
//           {
//             reject("second way to reject promise");
//           }
//     });
// }

// promise().then((data)=>{console.log(data)}).catch((error)=>{console.log(error)});

// promise chaining....

// print one to five number after one second.

// let promise=(num)=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//         console.log(num);
//     },1000)
// });
// }

// promise(1)
// .then(()=>promise(2))
// .then(()=>promise(3))
// .then(()=>promise(4))
// .then(()=>promise(5));

// second promise chaining---

// let promise=(num)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// let value=Promise.resolve();

// for(let i=1;i<=5;i++)
// {
//     value=value.then(()=>promise(i));
// }

// async await example---

let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Successfull payment");
    },2000);
})
async function function1(){
    let result=await promise;
    console.log(result);

    console.log("you can give access dashboard");
}
function1();