import "./Modal.css";
function Modal(props) {
  function hendalClick() {
    props.cloce();
  }
  return (
   <div className="owerflow">
     <div className="modalWraper">
      <div className="modal">
        <div className="cloceModal">
          <button onClick={hendalClick}>X</button>
        </div>
        <div className="modalConent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            beatae deleniti consequuntur voluptatem provident ullam, dolores
            harum, qui similique illo, quod nemo. Nisi ea iste harum quod ipsam
            nam porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ad tempore nulla deserunt saepe ex, recusandae rerum! Delectus, sit
            quaerat suscipit atque quibusdam sed obcaecati ea. Odit obcaecati id
            pariatur ex!
          </p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Modal;
