import { Typography, Avatar } from "@mui/material";
import styles from "./styles.module.css";


const Comment = ({ name, description, date, handleDelete }) => {
  return (
    <li className={styles.comment}>
      <Avatar sx={{ width: 56, height: 56 }} alt="yorke" src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Thom_Yorke_2013.jpg" />
      <div className={styles.commentContent}>
        <Typography variant="h5" className={styles.commentName}>{name}</Typography>
        <Typography className={styles.commentMessage}>{description}</Typography>
      </div>
      <Typography className={styles.commentDate} variant="span">{date}</Typography>
    </li>
  )
} 

export default Comment;