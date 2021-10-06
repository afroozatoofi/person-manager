import React from "react";
import { Button } from "react-bootstrap";

import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import NewPerson from "./components/Person/NewPerson";
import { useDispatch, useSelector } from "react-redux";
import { setShowPersons } from "./actions/showPersons";

const App = () => {
  const showPersons = useSelector((state) => state.showPersons);
  const dispatch = useDispatch();

  return (
    <div className="rtl text-center">
      <Header appTitle="مدیریت کننده اشخاص" />

      <NewPerson />

      <Button
        onClick={() => dispatch(setShowPersons())}
        variant={showPersons ? "info" : "danger"}
      >
        نمایش اشخاص
      </Button>

      {showPersons ? <Persons /> : null}
    </div>
  );
};
export default App;
