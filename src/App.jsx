import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(true);

  function modalShow() {
    setShowModal(true);
  }

  function cloceModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="container">
        <Header />
        <main>
          {showModal ? (
            <Modal cloce={cloceModal} />
          ) : (
            <button onClick={modalShow}>Show modal</button>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
