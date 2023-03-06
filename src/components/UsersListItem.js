import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunks';
import ExpandablePanel from './ExpandablePanel';


function UserListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    const header = <>
        <Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            CONTENT!!!
        </ExpandablePanel>



    );
};

export default UserListItem;