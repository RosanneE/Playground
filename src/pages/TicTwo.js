function TicTac(props) {
    let player = true;
  
    function ticOnClick() {
      // player = !player;
      // console.log(player);
    }
  
    function ticReset() {
      player = !player;
      console.log(player);
      console.log('reset')
    }
    return (
      <div className="tic">
        <h1>Tic-Tac-Toe</h1>
        <div className="ticBoard">
          <div className="row">
            <div id="0" className="square" ></div>
            <div id="1" className="square"></div>
            <div id="2" className="square"></div>
          </div>
          <div className="row">
            <div id="3" className="square"></div>
            <div id="4" className="square"></div>
            <div id="5" className="square"></div>
          </div>
          <div className="row">
            <div id="6" className="square"></div>
            <div id="7" className="square"></div>
            <div id="8" className="square"></div>
          </div>
        </div>
        <button
          className="button-78"
          role="button"
          onClick={(event) => ticReset()}
        >
          Reset
        </button>
      </div>
    );
  }
  
  export default TicTac;
  