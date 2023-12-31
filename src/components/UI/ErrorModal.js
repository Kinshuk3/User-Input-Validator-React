import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <div>
    <div className={classes.backdrop} onClick={props.onAcknowledge}></div>
    <Card cssClass={classes.modal}>
      <header className={classes.header}>
        <h2>{props.errorTitle}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.errorMessage}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onAcknowledge}>Acknowledge</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
