export default function Tags({tech}){
  function mapTags(tech){
    return tech.map((t, key)=>{
      return(
          <span className="tag is-info" key={key}>{t}</span>
      ) 
    })
  }

  return(
    <div className="tags">
      {mapTags(tech)}
    </div>
  )
}