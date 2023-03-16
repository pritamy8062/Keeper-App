import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  // const [noteTitle , setNoteTitle] = useState("");
  // const [noteContent , setNoteContent] = useState("");

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });

    // setNoteTitle(prevTitle =>{
    //   return {
    //     ...prevTitle,
    //     [name] : value
    //   };
    // });

    // setNoteContent(prevContent =>{
    //   return {
    //     ...prevContent,
    //     [name] : value
    //   };
    // });



  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
