// import { useState } from "react";

// export const AgeCalc = () => {
//   const tod = new Date();
//   const year = tod.getFullYear();
//   console.log(year);
//   console.log(tod);
//   const [age, setAge] = useState("");
//   const [sh, setSh] = useState(false);
//   const birth = year - age;

//   function ClickHandler(e) {
//     e.preventDefault();
//      setSh(!sh);
//   }

//   function ClearHandler() {
//     setAge("");
//     setSh(false);
    
//   }
//   return (
//     <div className="age">
//       <form>
//         <input
//           type="number"
//           placeholder="enter your age"
//           value={age}
//           onChange={(e) => setAge(+e.target.value)}
//         />

//         <button onClick={ClickHandler}>Submit</button>

//         {sh && (
//             <div><h3>Your birth date is {birth}</h3>
//         <button onClick={ClearHandler}>Clear</button></div>)}

//       </form>
//     </div>
//   );
// };
