import "./details.css";
const Details = () => {
  return (
    <div className="details">
      {/* A 3 x 3 grid of text about the car */}
      <div className="details__grid">
        <div className="details__column">
          <div className="details__row">
            <p className="row__tag">The All New</p>
          </div>
          <div className="details__row">
            <p className="row__car__name">PORSCHE 911</p>
          </div>
          <div className="details__row">
            <p className="row__car__type">GT3 RS</p>
          </div>
        </div>
        <div className="details__column">
          <div className="details__row">
            <div className="row__data">
              <p classname="car__details">0-100 in</p>
              <p classname="car__details">3,4 S</p>
            </div>
          </div>

          <div className="details__row">
            <div className="row__data">
              <p classname="car__details">Power (PS)</p>
              <p classname="car__details">510 PS</p>
            </div>
          </div>

          <div className="details__row">
            <div className="row__data">
              <p classname="car__details">Top Speed</p>
              <p classname="car__details">320 km/h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details__grid" style={{marginTop: "1%"}}>
          <p className="details_column more__text">
            WHEN THE DUST SHEET WAS PULLED BACK ON A BRAND-NEW PORSCHE MODEL AT
            THE 1963 FRANKFURT INTERNATIONAL MOTOR SHOW, FEW COULD HAVE
            PREDICTED THE HUGE IMPACT IT WOULD HAVE ON MOTORING IN THE DECADES
            TO COME.
          </p>
          <p className="details_column more__text">
            OVER THE 60 YEARS BETWEEN 1963 AND 2023, OVER 1.2M 911 SPORTSCARS
            HAVE BEEN MADE. EACH ONE IS EVIDENCE OF THE ENDLESS PURSUIT OF
            INNOVATION BY PORSCHE, PARTICULARLY WHEN IT COMES TO DELIVERING
            MEMORABLE DRIVE AFTER MEMORABLE DRIVE FOR ALL WHO EXPERIENCE IT.
          </p>
      </div>
    </div>
  );
};

export default Details;
