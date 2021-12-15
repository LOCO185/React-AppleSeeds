import React,{useState} from "react";
import './style.css'

const Form = (props) => {
    const [state,setState]=useState({firstName:'',lastName:'',selectedValue:'',text:''})
    const [display,setDisplay]=useState(true);

    const handleChange = e => {
        
        const { name, value } = e.target;
        console.log(name, value )
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onInputSubmit=(e)=>{
        console.log('is submiited')
      e.preventDefault(); 
      
    }

    
    return (
        <div>
            <form onSubmit={(e)=>{onInputSubmit(e)}} className="form1">

            {display?
            <>
            <label>First Name
            <input type="text" value={state.firstName} onChange={(e)=>{handleChange(e)}} name='firstName' />
            </label>
            <label>Last Name
            <input type="text" value={state.lastName} onChange={(e)=>{handleChange(e)}}  name='lastName'/>
            </label>
            <label >Choose an Age: &nbsp;

            <select value={state.selectedValue}  onChange={(e)=>{handleChange(e)}}  name='selectedValue'>
                <option value="0-15">0-15</option>
                <option value="15-25">15-25</option>
                <option value="25-40">25-40</option>
                <option value="40+">40+</option>
            </select>
            </label>
            <label >Text Area &nbsp;
            <textarea id="w3review" name="text" rows="4" cols="50" value={state.text} onChange={(e)=>{handleChange(e)}}>
            </textarea>
            </label>
            <button onClick={()=>setDisplay(!display)}>Continue</button>
            </>
             :<div className="review">
                 <p>First Name: {state.firstName}</p>
                 <p>Last Name: {state.lastName}</p>
                 <p>Selected Age: {state.selectedValue}</p>
                 <p>Text About You: {state.text}</p>
                 <button onClick={()=>setDisplay(!display)}>back</button>
                 <input type="submit" value='send survey' />
             </div>}
             </form>
        </div>
    );


}
export default Form;