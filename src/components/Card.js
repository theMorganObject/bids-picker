import { Fragment } from 'react';
import classes from './Card.module.css';

const Card = props => {
  return (
    <Fragment>
      <div
        className={`${classes.card} ${
          props.isSelected ? classes.selected : ''
        }`}
      >
        <img src={props.img} className={classes.img} />
        <h4>${props.amount}</h4>
        <p className="message">{props.message}</p>
        {/* <button className="last-item">Accept!</button> */}
        <div className="spacer"></div>
      </div>
    </Fragment>
  );
};

export default Card;
