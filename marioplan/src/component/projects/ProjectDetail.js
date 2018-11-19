import React from 'react'

 const ProjectDetail = (props) => {
     const id =props.match.params.id;
  return (
    <div className="container section project-detail">
        <div className="card z-depth-0">
            <div className="card-content">
            <span className="card-title">Project Title-{id}</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
            <div>Posted by the net Ninja</div>
            <div>22 september, 2am</div>
            </div>
        </div>
    </div>
  )
}


export default ProjectDetail;