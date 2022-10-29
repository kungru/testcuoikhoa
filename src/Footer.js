import { useContext } from "react";
import { FaLandmark } from "react-icons/fa";
import ContextLanguage from "./Context/Context";
const Footer = () => {
  const lan=useContext(ContextLanguage)
  const handleLanguageVi=()=>{
    lan.setLanguage({
      placeholder:'Điền task',
      submit: 'Thêm',
      made: 'Tạo ra bởi MindX',
      switch:'Có sắn tại',
      test1:'Bạn còn' ,
      test2:'việc chưa làm'
    })
  }
  const handleLanguageUS=()=>{
    lan.setLanguage({
      placeholder:'Enter task ...',
      submit: 'submit',
      made: 'made by MindX',
      switch:'Available on',
      test1:'You have',
      test2:'tasks left!'
    })
  }
  return (
    <div>
      <h3>{lan.language.made} 🔥</h3>
      <div>
        <span>{lan.language.switch}:</span>
        <span className="languague-picker" onClick={handleLanguageVi}>🇻🇳</span>
        <span className="languague-picker selected"onClick={handleLanguageUS}>🇺🇸</span>
      </div>
    </div>
  );
};

export default Footer;
