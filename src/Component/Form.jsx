import "./Form.css";

const Form = () => {
  return <>
    <h2>Item Entry Form</h2>
    <hr />
    <div className="form-box">
      <label htmlFor="">Item Name</label>
      <input type="text" />

      <label htmlFor="">Qty</label>
      <input type="number" />

      <label htmlFor="">Price</label>
      <input type="number" />

      <button>Enter</button>

      <hr />
    </div>
  </>;
};

export default Form;
