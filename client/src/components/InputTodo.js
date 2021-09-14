import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://localhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also holding the restful api

      //https://pern-todo-app-demo.herokuapp.com/todos
      const response = await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;













// import React, { Fragment, useState } from 'react';

// export default function InputTodo() {

//     const [description, setDescription] = useState('');

//     const onSubmitForm = async e => {
//         e.preventDefault(); 
//         try {
//             const body = { description };
//             const res = await fetch('/todos', {
//                 method: 'POST',
//                 headers: { "Content-Type": "application/json"},
//                 body: JSON.stringify(body) 
//             });
//             console.log(res);
//             window.location = '/';
//         } catch (err) {
//             console.error(err.message);
//         }
//     }

//     return (
//         <Fragment>
//             <h1 className="text-center mt-5">
//                 PERN Todo List
//             </h1>
//             <form 
//             className="d-flex mt-5"
//             onSubmit={(e) => onSubmitForm(e)}>
//                 <input 
//                 className="form-control"
//                 type="text" 
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 />
//                 <button
//                 className="btn btn-success">
//                     Add
//                 </button>
//             </form>
//         </Fragment>
//     );
// }
