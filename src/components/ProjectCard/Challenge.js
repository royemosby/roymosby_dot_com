export default function Challenge({challenge}){

  function concatParas(challenge){
    if(Array.isArray(challenge)){
        return (
          challenge.map((para, i) =>{
            return (
              <p key={i}>{para}</p>
            )
          })
        )
    } else {
      return (
        <p>{challenge}</p>
      )
    }
  }

  return(
    <div className="content">
      {concatParas(challenge)}
    </div>
  )
}