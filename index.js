// // code your solution here

const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`;
  };
  const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`;
  };
  const wrapAdjective = (wrapper) => {
    return wrapper === "*"
      ? (adjective) => `You are ${wrapper}${adjective}${wrapper}!`
      : (adjective) => `You are ${wrapper}${adjective}${wrapper}!`;
  };
  