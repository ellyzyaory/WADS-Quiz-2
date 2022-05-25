import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "../App.css";
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';


const CreatePost = () => {
  const paperStyle={padding:10,height:'70vh',width:280, margin:"40px auto"}
  const titleStyle={marginBottom: 30}
  const btnStyle={margin:'8px 0'}

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:8000/heroes/", {
            method: "POST",
            headers: {
					"Content-Type": 'application/json',
				},
            body: JSON.stringify({
              name: name,
              alias: alias,
            }),
          });
          let resJson = await res.json();
          if (res.status === 201) {
            setName("");
            setAlias("");
            setMessage("Hero has been added");
            return navigate('/');
          } else {
            setMessage("There is an error");
          }
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div className="CreatePost">
        <form onSubmit={handleSubmit}>
        <Paper style={paperStyle}>
            <Grid container>
              <Typography variant="h2" style={titleStyle}>Create Post</Typography>
              <Grid item>
                <TextField
                  fullWidth required
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth required
                  type="text"
                  value={alias}
                  placeholder="Alias"
                  onChange={(e) => setAlias(e.target.value)}
                />

                <Button 
                style={btnStyle} 
                type="submit" 
                variant="contained" 
                size="large"
                color="primary"
                fullWidth>
                  Submit
                </Button>

              <div className="message">{message ? <p>{message}</p> : null}</div>
              </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

export default CreatePost;
