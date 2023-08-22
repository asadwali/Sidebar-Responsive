import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Greet from "./components/Greet";
import AppointmentCard from "./components/AppointmentCard";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import appointments from "./appointments.json";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  const renderAppointments = () => {
    return appointments.map(a => (
      <AppointmentCard
        key={a.id}
        name={a.name}
        status={a.status}
        dateTime={a.dateTime}
        remaining={a.remaining}
        detail={a.detail}
      />
    ));
  };

  return (
    <>
      <div className="d-flex">
        <div className="d-none d-md-flex">
          <Sidebar />
        </div>
        <div className="second-col">
          <Navbar toggleMenu={toggleMenu} />
          <Header />
          <Greet />
          <div className="app-row mb-3">
            <div className="app-col-lg-8">{renderAppointments()}</div>
            <div className="app-col-lg-4 d-none d-lg-block">
              <Banner />
            </div>
          </div>
        </div>
      </div>
      {menuVisible && <Menu toggleMenu={toggleMenu} />}
    </>
  );
}

export default App;
