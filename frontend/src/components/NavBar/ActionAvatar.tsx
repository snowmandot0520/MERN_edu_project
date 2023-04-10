import { ActionIcon, Avatar, Menu } from '@mantine/core';
import { TbDoorExit, TbUser } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import Storage from 'src/services/Storage';

import { routes } from 'src/config/routes_config';
import toast from 'src/utils/Toast';

const ActionAvatar = () => {
  const navigate = useNavigate();

  return (
    <Menu position="bottom-start" withinPortal={true}>
      <Menu.Target>
        <ActionIcon>
          <Avatar size={28} radius="xl" />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={async () => {
            // TODO : Do redirect code
          }}
          icon={<TbUser size={14} />}
        >
          My account
        </Menu.Item>
        <Menu.Item
          onClick={async () => {
            Storage.clearAll();
            toast.success('Logout successful');
            navigate(routes.signIn.path_string());
          }}
          icon={<TbDoorExit size={14} />}
        >
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionAvatar;
