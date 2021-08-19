import Tags from './Tags'
import Challenge from './Challenge'
import styles from './ProjectCard.module.scss'
import Links from './Links'

export default function ProjectCard({project}){
  return(
    <div className={["tile is-6 p-4", styles.card].join(" ")}>
      <div className={["card", styles.overflowScroll].join(" ")}>
        <div className={styles.front}>
          <header className="card-header p-4">
            <h3 className=" title card-title is-size-3">
              {project.name}
            </h3>
          </header>
          <div className="card-image p-2">
            <figure>
              <img src={project.preview_image} alt={`${project.name} preview`}/>
              <figcaption>
                <div className="tags">
                  <Tags tech={project.technologies}/>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="card-content">
            {project.description}
          </div>
        </div>
        <div className={[styles.back].join(" ")}>
          <header className="card-header p-4">
            <h3 className="card-title is-size-3 title">
              {project.name} details
            </h3>
          </header>
          <div className="card-content">
            <h4 className="card-title is size-5 subtitle">Challenge:</h4>
            <div className="content">
              <Challenge challenge={project.challenge}/>
              <Links name = {project.name} links={project.links}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}