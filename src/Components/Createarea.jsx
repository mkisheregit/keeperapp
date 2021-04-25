import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function Createarea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value // have to understand
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="..Give title to your note "
          value={note.title}
          onChange={handlechange}
        />
        <br />
        <input
          name="content"
          type="text"
          placeholder="..write note here"
          value={note.content}
          onChange={handlechange}
        />
        <br />

        <button onClick={submitNote}>
          {" "}
          <AddIcon />{" "}
        </button>
      </form>
    </div>
  );
}
export default Createarea;
