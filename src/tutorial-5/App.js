import React, { useEffect } from "react";
import Comment from "./conponents/comment/comment";
import Form from "./conponents/form/form";
import { Paper, Typography } from "@mui/material";
import styles from "./styles.module.css";

const App = () => {
  const [comments, setComments] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTextChange = (e) => {
    setDescription(e.target.value);
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getDate = new Date().toLocaleString();
    const comment = {
      name: name,
      description: description,
      email: email,
      createdAt: getDate,
    };
    setComments([...comments, comment]);
    clearFields();
  };

  useEffect(() => {
    const initialComments = JSON.parse(localStorage.getItem("comments"));
    setComments(initialComments ? initialComments : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <div className={styles.page}>
      <Paper elevation={5} className={styles.container}>
        <Typography component="ul">
          {comments.map((item) => (
            <Comment name={item.name} description={item.description} date={item.createdAt} />
          ))}
        </Typography>
      </Paper>
      <Paper elevation={5} className={styles.container}>
        <Form
          onSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleTextChange={handleTextChange}
          css={styles.form}
          name={name}
          email={email}
          description={description}
        />
      </Paper>
    </div>
  );
};

export default App;
