import React, { useState } from "react";
import {
  Modal,
  Typography,
  Card,
  CardActions,
  Button,
  CardContent,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: 400,
    height: 400,
    background: "#EAECEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  cardContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  form: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  actions: {
    width: "80%",
    justifyContent: "space-around"
  },
  input: {
    width: "80%",
    margin: 10
  }
});

const CreateModal = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={() => handleOpen()}>Criar conta</Button>
      <Modal
        open={open}
        onClose={handleOpen}
        onBackdropClick={handleOpen}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Typography component="div" className={classes.root}>
          <Card className={classes.card}>
            <Typography color="textSecondary" gutterBottom>
              Nova conta
            </Typography>
            <CardContent className={classes.cardContent}>
              <div className={classes.form}>
                <TextField
                  className={classes.input}
                  id="filled-basic"
                  label="Name..."
                  variant="filled"
                />
                <TextField
                  className={classes.input}
                  id="filled-basic"
                  label="Email..."
                  variant="filled"
                  type="email"
                />
                <TextField
                  className={classes.input}
                  id="filled-basic"
                  label="Senha..."
                  variant="filled"
                  type="password"
                />
              </div>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button onClick={() => handleOpen()}>Cancelar</Button>
              <Button variant="outlined" color="primary">
                Criar
              </Button>
            </CardActions>
          </Card>
        </Typography>
      </Modal>
    </>
  );
};

export default CreateModal;
