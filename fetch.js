// ** FETCH WITH MODERN JS MODULES **
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}

// ** FECTH WITH ASYNC FUNCTION **
// async function loadData(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// loadData()

// ** FETCH WITH PROMISES **
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))
