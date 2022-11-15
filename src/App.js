import { useState } from "react";

// simulamos una db.
const people = [
  {
    id: "people-1",
    title: "Juan Perez",
  },
  {
    id: "people-2",
    title: "Seba Esains",
  },
  {
    id: "people-3",
    title: "Leo Esains",
  },
  {
    id: "people-4",
    title: "Amalita Conte",
  },
  {
    id: "people-5",
    title: "Emma Conte",
  },
];

const calendar = [
  {
    id: "calendar-1",
    title: "Sesion de seguimiento",
  },
  {
    id: "calendar-2",
    title: "Revision de propuestas",
  },
  {
    id: "calendar-3",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-4",
    title: "Junta semanal del equipo",
  },
  {
    id: "calendar-5",
    title: "Revision de pendientes con clientes",
  },
];

const emails = [
  {
    id: "email-1",
    title: "Reporte de resultados",
  },
  {
    id: "email-2",
    title: "Requisitos para cambios",
  },
  {
    id: "email-3",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-4",
    title: "Proximos eventos",
  },
  {
    id: "email-5",
    title: "Participa en la encuesta",
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  function handleClick(e) {
    const op = e.target.name;

    switch(op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      default:
    };
  }

  return (
    <div>
      <button onClick={handleClick} name="all">All</button>
      <button onClick={handleClick} name="people">People</button>
      <button onClick={handleClick} name="calendar">Calendar</button>
      <button onClick={handleClick} name="emails">Emails</button>
    </div>   
  );
}

export default App;
