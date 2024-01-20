import { useEffect, useState } from "react";
import "./App.css";
import CrudForm from "./components/CrudForm";
import CrudTable from "./components/CrudTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formObject, setFormObject] = useState({});
  const [formObjectList, setFormObjectList] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formObject);
    setFormObjectList([...formObjectList, formObject]);
    setFormObject({});
  };

  useEffect(() => {
    console.log(formObjectList);
  }, [formObjectList]);

  return (
    <div className="p-3 lightBackground">
      <div className="container">
        <div className="border p-3 rounded bg-white ">
          <CrudForm
            formObject={formObject}
            setFormObject={setFormObject}
            submitForm={submitForm}
          />
        </div>
        <CrudTable data={formObjectList} />
      </div>
      {/* My Crud Form */}
    </div>
  );
}

export default App;
