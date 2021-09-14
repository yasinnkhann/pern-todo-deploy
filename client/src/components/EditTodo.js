import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  //editText function

  const editText = async id => {
    try {
      const body = { description };

      //proxy

      const res = await fetch(`/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [description, setDescription] = useState(todo.description);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      {/* id = "id21"*/}
      <div
        class="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(todo.todo_id)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;













// import React, { Fragment, useState } from 'react'

// export default function EditTodo({ todo }) {

//     const [description, setDescription] = useState(todo.description);

//     const updateDescription = async e => {
//         e.preventDefault();
//         const body = { description };

//         try {
//             const res = await fetch(`/todos/${todo.todo_id}`, {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json'},
//                 body: JSON.stringify(body)
//             });
//             console.log(res);
//             window.location = '/';
//         } catch (err) {
//             console.error(err.message)
//         }
//     }

//     return (
//         <Fragment>
//             <button 
//             type="button" 
//             className="btn btn-warning" 
//             data-toggle="modal" 
//             data-target={`#id${todo.todo_id}`}>
//                 Edit
//             </button>

//             <div 
//             className="modal" 
//             id={`id${todo.todo_id}`}
//             onClick={() => setDescription(todo.description)}>
//             <div className="modal-dialog">
//                 <div className="modal-content">

//                 <div className="modal-header">
//                     <h4 className="modal-title">Edit Todo</h4>
//                     <button 
//                     type="button"
//                     className="close" 
//                     data-dismiss="modal"
//                     onClick={() => setDescription(todo.description)}>
//                         &times;
//                     </button>
//                 </div>

//                 <div className="modal-body">
//                     <input
//                     className="form-control"
//                     type="text" 
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     />
//                 </div>

//                 <div className="modal-footer">
//                     <button 
//                     type="button"
//                     className="btn btn-warning" 
//                     data-dismiss="modal"
//                     onClick={(e) => updateDescription(e)}>
//                         Edit
//                     </button>
                    
//                     <button 
//                     type="button" 
//                     className="btn btn-danger" 
//                     data-dismiss="modal"
//                     onClick={() => setDescription(todo.description)}>
//                         Close
//                     </button>
//                 </div>

//                 </div>
//             </div>
//             </div>
//         </Fragment>
//     );
// }
    