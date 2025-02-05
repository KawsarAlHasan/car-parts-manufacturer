import { Table } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
import AllUser from "./AllUser";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery("users", () =>
    fetch("https://two-start-manufacturer-backend.vercel.app/users").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const refetchUsers = () => {
    queryClient.invalidateQueries("users");
  };

  return (
    <div>
      <h1 className="my-4 text-center">
        ALL <span className="text-danger"> USERS </span>
      </h1>
      <h4 className="mb-3 text-center">
        All Users: <span className="text-primary">{users?.length}</span>
      </h4>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Delete Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <AllUser key={user._id} user={user} refetchUsers={refetchUsers} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
