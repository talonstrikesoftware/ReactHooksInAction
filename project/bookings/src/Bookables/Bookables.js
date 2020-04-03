//import React, { useState } from "react";

// BookablesHardCoded
// function Bookables ({ bookablesByGroup}) {
//   const group = "rooms";

//   const bookables = bookablesByGroup[group] || [];

//   const bookableIndex = 0;

//   return (
//     <ul className="bookables">
//       {bookables.map((b, i) => (
//         <li key={b.title}
//         className={i === bookableIndex ? "selected" : null}>
//           {b.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

// BookablesDirectChange
// function Bookables({ bookablesByGroup }) {
//   const group = "rooms";
//   const bookables = bookablesByGroup[group] || [];
//   let bookableIndex = 0;

//   function changeBookable(selectedIndex) {
//     bookableIndex = selectedIndex;
//   }

//   return (
//     <ul className="bookables">
//       {bookables.map((b, i) => (
//         <li
//           key={b.title}
//           className={i === bookableIndex ? "selected" : null}
//           onClick={() => changeBookable(i)}
//         >
//           {b.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

// BookablesSetIndex
// import React, { useState } from "react";

// function Bookables({ bookablesByGroup }) {
//   const group = "rooms";
//   const bookables = bookablesByGroup[group] || [];
//   const [bookableIndex, setBookableIndex] = useState(0);

//   function changeBookable(selectedIndex) {
//     setBookableIndex(selectedIndex);
//   }

//   return (
//     <ul className="bookables">
//       {bookables.map((b, i) => (
//         <li
//           key={b.title}
//           className={i === bookableIndex ? "selected" : null}
//           onClick={() => changeBookable(i)}
//         >
//           {b.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

// BookablesNextButton
// import React, { useState } from "react";

// function Bookables({ bookablesByGroup }) {
//   const group = "rooms";
//   const bookables = bookablesByGroup[group] || [];
//   const [bookableIndex, setBookableIndex] = useState(0);

//   function changeBookable(selectedIndex) {
//     setBookableIndex(selectedIndex);
//   }

//   function nextBookable() {
//     setBookableIndex(i => (i + 1) % bookables.length);
//   }

//   return (
//     <div>
//       <ul className="bookables">
//         {bookables.map((b, i) => (
//           <li
//             key={b.title}
//             className={i === bookableIndex ? "selected" : null}
//             onClick={() => changeBookable(i)}
//           >
//             {b.title}
//           </li>
//         ))}
//       </ul>
//       <p>
//         <button onClick={nextBookable} autoFocus>
//           Next
//         </button>
//       </p>
//     </div>
//   );
// }

// BookablesGroups
// import React, { useState } from "react";

// function Bookables({ bookablesByGroup }) {
//   const [group, setGroup] = useState("kit");
//   const bookables = bookablesByGroup[group] || [];
//   const [bookableIndex, setBookableIndex] = useState(1);
//   const groups = Object.keys(bookablesByGroup);

//   function changeGroup(e) {
//     setGroup(e.target.value);
//   }

//   function changeBookable(selectedIndex) {
//     setBookableIndex(selectedIndex);
//   }

//   function nextBookable() {
//     setBookableIndex(i => (i + 1) % bookables.length);
//   }

//   return (
//     <div>
//       <select value={group} onChange={changeGroup}>
//         {groups.map(g => (
//           <option value={g} key={g}>
//             {g}
//           </option>
//         ))}
//       </select>

//       <ul className="bookables">
//         {bookables.map((b, i) => (
//           <li
//             key={b.title}
//             className={i === bookableIndex ? "selected" : null}
//             onClick={() => changeBookable(i)}
//           >
//             {b.title}
//           </li>
//         ))}
//       </ul>
//       <p>
//         <button onClick={nextBookable} autoFocus>
//           Next
//         </button>
//       </p>
//     </div>
//   );
// }

//BookableDetails
// import React, { useState, Fragment } from 'react';

// function Bookables ({ bookablesByGroup }) {
//   const [group, setGroup] = useState("kit");
//   const bookables = bookablesByGroup[group] || [];
//   const [bookableIndex, setBookableIndex] = useState(0);
//   const groups = Object.keys(bookablesByGroup);

//   const bookable = bookables[bookableIndex];

//   const [hasDetails, setHasDetails] = useState(false);

//   function changeGroup (e) {
//     setGroup(e.target.value);
//   }

//   function changeBookable (selectedIndex) {
//     setBookableIndex(selectedIndex);
//   }

//   function nextBookable () {
//     setBookableIndex(i => (i + 1) % bookables.length);
//   }

//   function toggleDetails (e) {
//     setHasDetails(e.target.checked);
//   }

//   return (
//     <Fragment>
//       <div>
//         <select value={group} onChange={changeGroup}>
//           {groups.map(g => <option value={g} key={g}>{g}</option>)}
//         </select>

//         <ul className="bookables">
//           {bookables.map((b, i) => (
//               <li
//                   key={b.title}
//                   className={i === bookableIndex ? "selected" : null}
//                   onClick={() => changeBookable(i)}
//               >
//                 {b.title}
//               </li>
//           ))}
//         </ul>
//         <p>
//           <button onClick={nextBookable} autoFocus>Next</button>
//         </p>
//       </div>

//       <div className="bookableDetails">
//         {bookable && (
//           <Fragment>
//             <p style={{marginTop:0}}>
//               <label>
//                 <input
//                   type="checkbox"
//                   onChange={toggleDetails}
//                   checked={hasDetails}
//                 />
//                 Show Details
//               </label>
//             </p>
//             {hasDetails && (
//               <div>
//                 <h2>{bookable.title}</h2>
//                 <p>{bookable.notes}</p>
//               </div>
//             )}
//           </Fragment>
//         )}
//       </div>
//     </Fragment>
//   );
// }

// BookablesReducer
// import React, {Fragment, useReducer} from "react";
// import reducer from "./reducer";

// const initialState = {
//   group: 'rooms',
//   bookableIndex: 0,
//   hasDetails: true
// };

// function Bookables ({ bookablesByGroup }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const {group, bookableIndex, hasDetails} = state;

//   const bookables = bookablesByGroup[group] || [];
//   const bookable = bookables[bookableIndex];
//   const groups = Object.keys(bookablesByGroup);

//   function changeGroup (e) {
//     dispatch({
//       type: 'SET_GROUP',
//       payload: e.target.value
//     });
//   }

//   function changeBookable (selectedIndex) {
//     dispatch({
//       type: 'SET_BOOKABLE',
//       payload: selectedIndex
//     });
//   }

//   function nextBookable () {
//     dispatch({
//       type: 'SET_BOOKABLE',
//       payload: (state.bookableIndex + 1) % bookables.length
//     });
//   }

//   function toggleDetails (e) {
//     dispatch({
//       type: 'SET_HAS_DETAILS',
//       payload: e.target.checked
//     });
//   }

//   return (
//       <Fragment>
//         <div>
//           <select value={group} onChange={changeGroup}>
//             {groups.map(g => <option value={g} key={g}>{g}</option>)}
//           </select>

//           <ul className="bookables">
//             {bookables.map((b, i) => (
//                 <li
//                     key={b.title}
//                     className={i === bookableIndex ? "selected" : null}
//                     onClick={() => changeBookable(i)}
//                 >
//                   {b.title}
//                 </li>
//             ))}
//           </ul>
//           <p>
//             <button onClick={nextBookable} autoFocus>Next</button>
//           </p>
//         </div>

//         <div className="bookableDetails">
//           {bookable && (
//               <Fragment>
//                 <p style={{marginTop: 0}}>
//                   <label>
//                     <input
//                         type="checkbox"
//                         onChange={toggleDetails}
//                         checked={hasDetails}
//                     />
//                     Show Details
//                   </label>
//                 </p>
//                 {hasDetails && (
//                     <div>
//                       <h2>{bookable.title}</h2>
//                       <p>{bookable.notes}</p>
//                     </div>
//                 )}
//               </Fragment>
//           )}
//         </div>
//       </Fragment>
//   );
// }

// BookablesPresentation
// import React, {Fragment, useReducer, useRef} from "react";
// import reducer from "./reducer";

// const initialState = {
//   group: 'rooms',
//   bookableIndex: 0,
//   hasDetails: true,
//   isPresenting: true
// };

// function Bookables ({ bookablesByGroup }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const {group, bookableIndex, hasDetails, isPresenting} = state;

//   const bookables = bookablesByGroup[group] || [];
//   const bookable = bookables[bookableIndex];
//   const groups = Object.keys(bookablesByGroup);

//   const timerRef = useRef(null);

//   function changeGroup (e) {
//     dispatch({
//       type: 'SET_GROUP',
//       payload: e.target.value
//     });
//   }

//   function toggleDetails (e) {
//     dispatch({
//       type: 'SET_HAS_DETAILS',
//       payload: e.target.checked
//     });
//   }

//   function changeBookable (selectedIndex, keepPresenting) {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//       timerRef.current = null;
//     }

//     dispatch({
//       type: 'SET_BOOKABLE',
//       payload: {
//         selectedIndex,
//         isPresenting: keepPresenting
//       }
//     });
//   }

//   function nextBookable () {
//     changeBookable((state.bookableIndex + 1) % bookables.length);
//   }

//   function autoNext () {
//     changeBookable((state.bookableIndex + 1) % bookables.length, true);
//   }

//   if (isPresenting && timerRef.current === null) {
//     timerRef.current = setTimeout(autoNext, 3000);
//   }

//   return (
//       <Fragment>
//         <div>
//           <select value={group} onChange={changeGroup}>
//             {groups.map(g => <option value={g} key={g}>{g}</option>)}
//           </select>

//           <ul className="bookables">
//             {bookables.map((b, i) => (
//                 <li
//                     key={b.title}
//                     className={i === bookableIndex ? "selected" : null}
//                     onClick={() => changeBookable(i)}
//                 >
//                   {b.title}
//                 </li>
//             ))}
//           </ul>
//           <p>
//             <button onClick={nextBookable} autoFocus>Next</button>
//           </p>
//         </div>

//         <div className="bookableDetails">
//           {bookable && (
//               <Fragment>
//                 <p style={{marginTop: 0}}>
//                   <label>
//                     <input
//                         type="checkbox"
//                         onChange={toggleDetails}
//                         checked={hasDetails}
//                     />
//                     Show Details
//                   </label>
//                 </p>
//                 {hasDetails && (
//                     <div>
//                       <h2>{bookable.title}</h2>
//                       <p>{bookable.notes}</p>
//                     </div>
//                 )}
//               </Fragment>
//           )}
//         </div>
//       </Fragment>
//   );
// }

// BookablesFocus
import React, { Fragment, useReducer, useRef } from "react";
import reducer from "./reducer";

const initialState = {
  group: "rooms",
  bookableIndex: 0,
  hasDetails: true,
  isPresenting: true
};

function Bookables({ bookablesByGroup }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { group, bookableIndex, hasDetails, isPresenting } = state;

  const bookables = bookablesByGroup[group] || [];
  const bookable = bookables[bookableIndex];
  const groups = Object.keys(bookablesByGroup);

  const timerRef = useRef(null);
  const nextButtonRef = useRef();

  function changeGroup(e) {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value
    });
  }

  function toggleDetails(e) {
    dispatch({
      type: "SET_HAS_DETAILS",
      payload: e.target.checked
    });
  }

  function changeBookable(selectedIndex, keepPresenting) {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    dispatch({
      type: "SET_BOOKABLE",
      payload: {
        selectedIndex,
        isPresenting: keepPresenting
      }
    });

    if (!keepPresenting) {
      nextButtonRef.current.focus();
    }
  }

  function nextBookable() {
    changeBookable((state.bookableIndex + 1) % bookables.length);
  }

  function autoNext() {
    changeBookable((state.bookableIndex + 1) % bookables.length, true);
  }

  if (isPresenting && timerRef.current === null) {
    timerRef.current = setTimeout(autoNext, 3000);
  }

  return (
    <Fragment>
      <div>
        <select value={group} onChange={changeGroup}>
          {groups.map(g => (
            <option value={g} key={g}>
              {g}
            </option>
          ))}
        </select>

        <ul className="bookables">
          {bookables.map((b, i) => (
            <li
              key={b.title}
              className={i === bookableIndex ? "selected" : null}
              onClick={() => changeBookable(i)}
            >
              {b.title}
            </li>
          ))}
        </ul>
        <p>
          <button onClick={nextBookable} ref={nextButtonRef}>
            Next
          </button>
        </p>
      </div>

      <div className="bookableDetails">
        {bookable && (
          <Fragment>
            <p style={{ marginTop: 0 }}>
              <label>
                <input
                  type="checkbox"
                  onChange={toggleDetails}
                  checked={hasDetails}
                />
                Show Details
              </label>
            </p>
            {hasDetails && (
              <div>
                <h2>{bookable.title}</h2>
                <p>{bookable.notes}</p>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Bookables;
