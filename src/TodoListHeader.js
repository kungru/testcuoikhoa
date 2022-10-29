import { useContext ,useState} from "react";
import ContextLanguage from "./Context/Context";

const Header = (props,index,filterCheck,handleGetOption, filterNotCheck, filterFull,sortTask) => {
  const lan=useContext(ContextLanguage);
 
  // const [option,setOption]=useState('');
 
// console.log(option)

const wrapHandleChange=((e)=>handleGetOption(e))
  return (
  <>
  <button onClick={()=>props.filterCheck()}>Checked  </button>
  <button onClick={()=>props.filterNotCheck()}>Not Checked  </button>
  <button onClick={()=>props.filterFull()}>All Tasks</button>
  <button onClick={()=>props.sortTask()}>Sort</button>
  <div className="header" >{lan.language.test1} {props.t} {lan.language.test2}</div>
  {/* <select   >
    <option>Please choose</option>
    <option>Check</option>
    <option>Uncheck</option>
  </select> */}
  </>
  )
};

export default Header;
