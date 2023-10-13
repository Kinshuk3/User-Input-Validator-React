import classes from "./Card.module.css";

const Card = (props) => {
  const allClasses = `${props.cssClass} ${classes.card}`;
  return <div className={allClasses}>{props.children}</div>;
};

export default Card;
