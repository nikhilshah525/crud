import { useState } from "react";
import "./App.css";
import CrudForm from "./components/CrudForm";
import CrudTable from "./components/CrudTable";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuId } from "uuid";
import { toast } from "react-toastify";

function App() {
  const [formObject, setFormObject] = useState({ gender: "Male" });
  const [formObjectList, setFormObjectList] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (formObject.userId) {
      setFormObjectList(
        formObjectList.map((data) => {
          if (data.userId === formObject.userId) {
            return { ...data, ...formObject };
          } else {
            return data;
          }
        })
      );
      toast.success("Record Updated Successfully");
      setFormObject({ gender: "Male" });
    } else {
      toast.success("Record Inserted Successfully");
      setFormObjectList([...formObjectList, { ...formObject, userId: uuId() }]);
      setFormObject({ gender: "Male" });
    }
  };

  const onDeleteHandle = (id) => {
    setFormObjectList(formObjectList.filter((data) => data.userId !== id));
    toast.error("Record Deleted Successfully");
  };
  const onUpdateHandle = (object) => {
    setFormObject(object);
  };

  return (
    <div className="p-3 lightBackground">
      <div className="container">
        <div className="border p-3 rounded bg-white ">
          {/* My Crud Form */}
          <CrudForm
            formObject={formObject}
            setFormObject={setFormObject}
            submitForm={submitForm}
            onCancel={() => setFormObject({ gender: "Male" })}
          />
        </div>
        {/* My Crud Table */}
        <CrudTable
          data={formObjectList}
          onUpdate={onUpdateHandle}
          onDelete={onDeleteHandle}
        />
      </div>
    </div>
  );
}

export default App;
