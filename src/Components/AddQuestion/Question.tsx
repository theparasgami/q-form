
import "./Question.scss"
import { AddOptionBtn } from "../Buttons/Button";



const Question = (props:any) => {
 
    return (
    <div className="Question">
    
        
        <input type="text"
               value={props.question.Name}
               name="Name"
               onChange={props.handleChange}
               className="heading"
        />
         
        <select value={props.question.Type}
                name="Type"
                onChange={props.handleChange}
                className="choice"
        >

            <option value="Dropdown">
                Dropdown
            </option>
            <option value="Checkbox">
                Checkboxes
            </option>

        </select>
        <br/>
        {
          props.question.Options.map((option:string,ind:number)=>
            <div key={ind} className="option">
                 
                 <div >{ind+1}.</div>
                 
                 <input type="text"
                        value={option}
                        onChange={(e)=>props.handleoptionChange(ind,e.target.value)}
                  />

                  <div className="crossIcon"
                       onClick={()=>props.removeoption(ind)}
                  >
                    X
                  </div>

            </div>
          )
        }
        <AddOptionBtn onclick={()=>props.addoption()}/>
         

    </div>
  )
}

export default Question;