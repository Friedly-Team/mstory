import React from "react";

export default ({player, update, location}) => {
  const actionUI = ({func, name}) => (
    <button onClick={() => func(player, update)} key={name}>
      {name}
    </button>
  );
  return (
    <div className="GameAction">
      {location.actions.map(actionUI)}
    </div>
  )
}