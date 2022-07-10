
import DeleteIconSrc from "../../Assets/delete-icon.png"

export  function AddQuestionBtn(props:any) {
  return (
      <div style={{margin:"auto"}} >
        
        <button  style={{
                minWidth:"10rem",
                minHeight:"4rem",
                background:"rgb(140, 7, 95)",
                border:"none",
                cursor:"pointer",
                fontSize:"1.3rem",
                color:"white",
                fontFamily:"monospace",
                borderRadius:"1rem"
               }}
               onClick={()=>props.onclick()}
        >
            Add Question
        </button> 
      
      </div>  
  )
}


export  function CreateFormBtn(props:any) {
  return (
      <div style={{margin:"4rem auto",textAlign:"center"}} >
        
        <button  style={{
                minWidth:"10rem",
                minHeight:"4rem",
                background:"rgb(32, 17, 122)",
                border:"none",
                cursor:"pointer",
                fontSize:"1.3rem",
                color:"white",
                fontFamily:"monospace",
                borderTopLeftRadius:"2rem",
                borderTopRightRadius:"2rem",
                borderBottomLeftRadius:"2rem",
                borderBottomRightRadius:"2rem"
               }}
               onClick={()=>props.onclick()}
        >
            Create
        </button> 
      
      </div>  
  )
}

export function DeleteBtn(props:any){
    return(
      <div 
           style={{margin:"0.6rem 3rem"}}
      >

          <img src={DeleteIconSrc}
               style={{
                 cursor:"pointer",
                 justifyContent:"flex-end",
               }}
               height="95"
               onClick={()=>props.onclick()}
               alt="delete"

          />

      </div>
    )
}

export function AddOptionBtn(props:any){
     return(
        
          <button onClick={()=>props.onclick()}
                  style={{width:"3rem",
                          cursor:"pointer",
                          height:"3rem",
                          fontSize:"2.5rem",
                          borderRadius:"2rem",
                          border:"none",
                          background:"#b088d3",
                          margin:"1rem 0"
                       }}
                    
          >
            +
          </button>
     )
}
