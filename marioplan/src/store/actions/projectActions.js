export const createProject =(project) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        //make a async call a database
        const fireStore =getFirestore();
        fireStore.collection('projects').add({
        ...project,
        authorFirstName:'Net', 
        authorLastName:'Ninja',
        authorId:1234,
        createdAt: new Date()
        })
        .then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err) =>{
            dispatch({type:'CREATE_PROJECT_ERROR',err}); 
        }) 
    }
};