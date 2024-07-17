import { InputProps } from "../../types/types";

function Input({
  inputName,
  dataTestId,
  name,
  type,
  enteredValue,
  setEnteredValue,
  pattern,
  title,
}: InputProps) {
  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(name, e.target.value);
  };

  return (
    <label className="input">
      <span className="input__heading">{inputName}</span>
      <input
        data-test-id={dataTestId}
        name={name}
        value={enteredValue}
        onChange={changeValueHandler}
        type={type}
        required
        pattern={pattern}
        title={title}
      />
    </label>
  );
}

export default Input;
