import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deletePerson, updatePerson } from "../../actions/persons";
import Person from "./Person";

const Persons = () => {
  const persons = useSelector((state) => state.persons);
  const dispatch = useDispatch();

  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          fullname={person.fullname}
          deleted={() => dispatch(deletePerson(person.id))}
          changed={(event) => dispatch(updatePerson(event, person.id))}
        />
      ))}
    </div>
  );
};

export default Persons;
