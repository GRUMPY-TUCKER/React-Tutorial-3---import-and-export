import React from 'react';

function App() {
  return (
    <div className="App">  
    <h1>Hello</h1>
    </div>
  );
}

const Hello = () =>{
    return(
        <div>
            <h1>Hiiii</h1>
        </div>
    );
}


const Hello2 = () =>{
    return(
        <div>
            <h1>Hiiii 2</h1>
        </div>
    );
}

const Hello3 = () =>{
    return(
        <div>
            <h1>Hiiii 3</h1>
        </div>
    );
}

export default App;
export  {Hello,Hello2,Hello3 as Bye};
export const value = "Hello";