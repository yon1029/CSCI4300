// write this component 
import User from './User';

interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    imageUrl: string;
  }

const Users = ({ prop }: { prop: UserType[] }) => {
    return(
        <div>className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4"
        {prop.map((user) => (
          <User key={user.id} user={user} />
        ))}</div>
    );
}

export default Users;