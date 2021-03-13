const ProgressBar = ({ value }) => {
  const valueInPercentage = Number.parseInt(value * 100);
  return (
    <div id="progress">
      <div
        testID="progressid"
        id="progressValue"
        style={{ width: `${valueInPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
