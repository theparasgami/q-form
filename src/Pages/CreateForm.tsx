import { useState  } from "react";

import Question from "../Components/AddQuestion/Question";
import {AddQuestionBtn,CreateFormBtn,DeleteBtn} from "../Components/Buttons/Button";
import Title from "../Components/Title/Title";



type QuestionType={
    Name:String;
    Type:String;
    Options:String[];
}

const DefaultQuestion:QuestionType={
    Name:"Untitled Question",
    Type:"Checkbox",
    Options:["Random Option"]
}

const CreatForm=()=>{

    const[title,setTitle]=useState({head:'Untitled-Form',
                                    description:''
                                   });

    const handleTitleChange=(e:any)=>{
        const {name,value}=e.target;
        setTitle({...title,[name]:value});
    }

    const [Questions,setQuestions]=useState<QuestionType[]>([]);
    
    const handleQuestionChange=(e:any,ind:Number)=>{
         const {name,value}=e.target;

         setQuestions( (prevQuestions) => 
             prevQuestions.map((question: QuestionType, index: Number) => {
                 if (ind !== index) return question;
                 else {
                     return { ...question, [name]: value }
                 }
             })
         );
         
    }

    const addOption=(ind:Number)=>{
          
          setQuestions((prevQuestion)=>
                   prevQuestion.map((question,index)=>{
                            if(ind!==index)return question;
                            else{
                                return {...question,
                                        Options:[...question.Options,"Untitled Option"]}
                            }
                   })
          )
    }
    const removeOption=(indQ:Number,indO:Number)=>{

          setQuestions((prevQuestion)=>
                   prevQuestion.map((question,index)=>{
                            if(indQ!==index)return question;    
                            return {...question,
                                     Options:question.Options.filter((option,indexO)=>
                                                                 indexO!==indO
                                                             )}
                   })
          )
    }
    const handleOptionChange=(indQ:Number,indO:Number,value:String)=>{

        setQuestions((prevQuestion)=>
        prevQuestion.map((question,index)=>{
                 if(indQ!==index)return question;
                 else{
                     return {...question,
                             Options:question.Options.map((option,indexO)=>
                                 indexO!==indO?option
                                              :value
                             )
                            }
                 }
        })
)
    }
  

    const PostData=()=>{
           console.log("Title",title);
           console.log("Questions:",Questions);
    }
   
    
    return (
        <div style={{width:"80%",margin:"auto"}} >

            <Title title={title}
                   handleChange={handleTitleChange}
            />

            {
                Questions.map((question,ind)=>
                    <div key={ind}
                         style={{display:"flex",
                                 border:"1px solid purple",
                                 borderRadius:"1rem",
                                 margin:"2rem 0",
                                 padding:"1rem"
                                }}
                               
                    >
                      
                       <Question question={question} 
                                 handleChange={(e:any)=>handleQuestionChange(e,ind)}
                                 addoption={()=>addOption(ind)}
                                 removeoption={(indO:Number)=>{removeOption(ind,indO)}}
                                 handleoptionChange={(indO:Number,val:String)=>{handleOptionChange(ind,indO,val)}}
                       />
                       <DeleteBtn onclick={()=>
                                            setQuestions( (prevQuestions) => 
                                            prevQuestions.filter(
                                            (question:QuestionType,index:Number)=>ind!==index))
                                          }
                       />

                    </div>
                )
            }

            <AddQuestionBtn  
                onclick={() =>
                    setQuestions((prevQuestions) => [...prevQuestions, DefaultQuestion])
                }
            />
            <hr style={{margin:"2% 0"}}/>

            <CreateFormBtn
                onclick={PostData}
            />
        </ div >
    )
}

export default CreatForm;