import TreeInput from "../components/TreeInput";
import RowInput from "../components/RowInput";

const UserInput = () => {
  return (
    <div>
      <div>
        <h3>Data</h3>
        <TreeInput />
      </div>
      <div>
        <h3>Row Number</h3>
        <RowInput />
      </div>
    </div>
  );
};

export default UserInput;
