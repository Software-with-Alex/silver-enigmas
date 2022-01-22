
// import React, { useState } from 'react';


// function consoleProp() {
//     console.log('hi') 
//     return 0
// }

// const ErrorExample = () => {

//     const [count, setCount] = useState(consoleProp()
//     )

//     function increment(){
        
//             setCount((prevCount) =>{
//                 return prevCount + 1
//             })
        
//     }
//     function decrement(){
        
//             setCount((prevCount) =>{
//                 return prevCount - 1
//             })
        
//     }


//   return (
      

//     <div> 
//         <button onClick={decrement}>-</button>
//         <span>{count}</span>
//         <button onClick={increment}>+</button>
//         </div>
    



//   ) 
// };



export default ErrorExample;




import React, { useState } from 'react';


function consoleProp() {
    console.log('hi') 
    return 0
}

const ErrorExample = () => {

    const [count, setCount] = useState(consoleProp()
    )

    function increment(){
        
            setCount((prevCount) =>{
                return prevCount + 1
            })
        
    }
    function decrement(){
        
            setCount((prevCount) =>{
                return prevCount - 1
            })
        
    }


  return (
      

    <div> 
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </div>
    



  ) 
};



export default ErrorExample;