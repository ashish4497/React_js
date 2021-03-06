import React from 'react'
import{connect} from 'react-redux';
import{firestoreConnect} from 'react-redux-firebase';
import{compose} from 'redux'
import projectReducer from '../../store/reducer/projectReducer';

 const ProjectDetail = (props) => {
    const {project} =props;
    if(project){
     return (<div className="container section project-detail">
             <div className="card z-depth-0">
                 <div className="card-content">
                 <span className="card-title">{project.title}</span>
                 <p>{project.content}</p>
                 </div>
                 <div className="card-action gret lighten-4 grey-text">
                 <div>Posted by {project.authorFirstNmae}{projectReducer.authorLastName}</div>
                 <div>22 september, 2am</div>
                 </div>
             </div>
         </div>)
    } else {
      return (
         <div className="container center">
            <p>Loading Projects...</p>
         </div>
      )
    }
}
const mapStateToProps =(state, ownProps)=>{
    console.log(state)
    const id =  ownProps.match.params.id;
    const projects =state.firestore.data.projects;
    const project = projects ? projects[id] :null
    return {
        project:projects
    }   
}


export default  compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'projects'
    }])
  )(ProjectDetail)
  