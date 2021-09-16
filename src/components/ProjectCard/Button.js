import arrow from "../../assets/right_arrow.svg"
import styles from './ProjectCard.module.scss'

export default function Button(props){
  return(
    <div 
      onClick={()=>props.flipCard()}
      className={["button", styles.absBottom].join(" ")}>
      Fip over to Seymore <img src={arrow} alt="arrow to flip card over" />
    </div>
  )
}