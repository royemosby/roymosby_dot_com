import { shortBioArray } from "../data/aboutMe"

export default function Info(){

  function mapBioParas(){
    return shortBioArray.map((para, idx) => {
      return (
        <p className="block" key={idx}>{para}</p>
      )
    })
  }

  return(
    <div className="box">
      <h2 className="is-size-2 has-text-centered title">About Roy</h2>
      {mapBioParas()}
    </div>
  )
}