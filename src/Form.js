import {useState} from 'react';
import { useContext } from 'react';
import ContextLanguage from './Context/Context';
const Form = ({props}) => {
const [input,setInput]=useState('');
const FormInput=(e)=>{setInput(e.target.value)}
const Submit=(e)=>{
  e.preventDefault()
  props(input);
  console.log(input)
}
const lan=useContext(ContextLanguage);
  return (
    <form className="form">
      <input placeholder={lan.language.placeholder} value={input} onChange={FormInput}/>
      <button onClick={Submit} >{lan.language.submit}</button>
    </form>
  );
};

export default Form;
