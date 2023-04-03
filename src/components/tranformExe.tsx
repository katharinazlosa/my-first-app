const TransfromExe = () => {
  return (
    <div className="transform-box">
      <div className="translate">
        <h4>Translate</h4>
        <div className="box box--translate"></div>
      </div>
      <div className="Rotate">
        <h4>Rotate</h4>
        <div className="box box--rotate"></div>
      </div>
      <div className="Scale">
        <h4>Scale</h4>
        <div className="box box--scale"></div>
      </div>
      <div className="Skew">
        <h4>Skew</h4>
        <div className="box box--skew"></div>
      </div>
    </div>
  );
};

export default TransfromExe;
