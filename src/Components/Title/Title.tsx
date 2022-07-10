import "./title.scss"

const Title=(props:any)=>{

    return (
        <div className="Title">

           <input type="text"
                  value={props.title.head}
                  onChange={(e)=>props.handleChange(e)}
                  name="head"
                  className="head"
           />
           <br/>
           <input type="text"
                  value={props.title.description}
                  onChange={(e)=>props.handleChange(e)}
                  placeholder="Add a description"
                  name="description"
                  className="description"
           /> 
        </div >
    )
}

export default Title;