

function HelloWorld(msg){
   const {message, ...remaining} = msg
   console.log(remaining)

   const {resp}= remaining
   const [a,b]=resp
    return <h1>Message:{b}</h1>
}

export default HelloWorld;