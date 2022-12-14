import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  console.log(doRemoveUser);
  const handleClick = () => {
    console.log(user);
    doRemoveUser(user);
  };
  return (
    <div>
      <div className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          <Button loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {error && <div>error</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};
export default UsersListItem;
