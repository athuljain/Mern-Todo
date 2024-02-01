// import React, { useState } from "react";
// import '../Styles/TodoHome.css'
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCheckbox,
//   MDBCol,
//   MDBContainer,
//   MDBInput,
//   MDBListGroup,
//   MDBListGroupItem,
//   MDBRow,
//   MDBTabs,
//   MDBTabsContent,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsPane,
// } from "mdb-react-ui-kit";
// import axios from 'axios'

// export default function TodoHome() {
//     const [active, setActive] = useState("tab1");
//     const [taskText, setTaskText] = useState(''); // State to store the task text
//     const [todoList, setTodoList] = useState([]); // State to store the todo list

//   const handleClick = (value) => {
//     if (value === active) {
//       return;
//     }

//     setActive(value);
//   };
//   const handleAddTask = async () => {
//     try {
//       // Send a POST request to add the task
//       const response = await axios.post('http://localhost:5000/user/addTodo', { userId: 'user_id_here', taskText });
      
//       // Update the todo list with the new task
//       setTodoList([...todoList, { text: taskText, completed: false }]);
      
//       // Reset the task text input
//       setTaskText('');
      
//       // Log the response from the server
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };
  

//   return (
//     <section className="gradient-custom vh-100">
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="d-flex justify-content-center align-items-center">
//           <MDBCol xl="10">
//             <MDBCard>
//               <MDBCardBody className="p-5">
//                 <div className="d-flex justify-content-center align-items-center mb-4">
//                   <MDBInput
//                     type="text"
//                     id="form1"
//                     label="New task..."
//                     value={taskText}
//                     onChange={(e)=>setTaskText(e.target.value)}
//                     wrapperClass="flex-fill"
//                   />
//                   <MDBBtn type="submit" color="info" className="ms-2">
//                     Add
//                   </MDBBtn>
//                 </div>
//                 <MDBTabs className="mb-4 pb-2">
//                   <MDBTabsItem>
//                     <MDBTabsLink
//                       onClick={() => handleClick("tab1")}
//                       active={active === "tab1"}
//                     >
//                       All
//                     </MDBTabsLink>
//                   </MDBTabsItem>
//                   <MDBTabsItem>
//                     <MDBTabsLink
//                       onClick={() => handleClick("tab2")}
//                       active={active === "tab2"}
//                     >
//                       Active
//                     </MDBTabsLink>
//                   </MDBTabsItem>
//                   <MDBTabsItem>
//                     <MDBTabsLink
//                       onClick={() => handleClick("tab3")}
//                       active={active === "tab3"}
//                     >
//                       Completed
//                     </MDBTabsLink>
//                   </MDBTabsItem>
//                 </MDBTabs>
//                 <MDBTabsContent>
//                   <MDBTabsPane show={active === "tab1"}>
//                     <MDBListGroup className="mb-0">
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                           defaultChecked
//                         />
//                         <s>Cras justo odio</s>
//                       </MDBListGroupItem>
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                           defaultChecked
//                         />
//                         <s>Dapibus ac facilisis in</s>
//                       </MDBListGroupItem>
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                         />
//                         Morbi leo risus
//                       </MDBListGroupItem>
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                         />
//                         Porta ac consectetur ac
//                       </MDBListGroupItem>
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                         />
//                         Vestibulum at eros
//                       </MDBListGroupItem>
//                     </MDBListGroup>
//                   </MDBTabsPane>
//                   <MDBTabsPane show={active === "tab2"}>
//                     <MDBListGroup className="mb-0">
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                         />
//                         Morbi leo risus
//                       </MDBListGroupItem>
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                         />
//                         Porta ac consectetur ac
//                       </MDBListGroupItem>
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                         />
//                         Vestibulum at eros
//                       </MDBListGroupItem>
//                     </MDBListGroup>
//                   </MDBTabsPane>
//                   <MDBTabsPane show={active === "tab3"}>
//                     <MDBListGroup className="mb-0">
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                           defaultChecked
//                         />
//                         <s>Cras justo odio</s>
//                       </MDBListGroupItem>
//                       <MDBListGroupItem
//                         className=" d-flex align-items-center border-0 mb-2 rounded"
//                         style={{ backgroundColor: "#f4f6f7" }}
//                       >
//                         {" "}
//                         <MDBCheckbox
//                           name="flexCheck"
//                           value=""
//                           id="flexCheck"
//                           className="me-3"
//                           defaultChecked
//                         />
//                         <s>Dapibus ac facilisis in</s>
//                       </MDBListGroupItem>
//                     </MDBListGroup>
//                   </MDBTabsPane>
//                 </MDBTabsContent>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = () => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Assuming userId is obtained from the authentication process
      const userId = '';
      
      // Make a POST request to the server to add the todo
      const response = await axios.post('http://localhost:5000/user/addTodo', { userId, taskText });
      
      // Handle success
      console.log(response.data.message);
      
      // Reset input field
      setTaskText('');
    } catch (error) {
      // Handle error
      console.error('Error adding todo:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskText}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
