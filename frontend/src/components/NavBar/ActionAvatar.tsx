import { ActionIcon, Avatar, Menu } from "@mantine/core";
import { TbDoorExit, TbUser } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { routes } from "../../config/routes_config";
import Storage from "../../services/Storage";
import toast from "../../utils/Toast";

const ActionAvatar = () => {
  const navigate = useNavigate();

  return (
    <Menu position="bottom-start" withinPortal>
      <Menu.Target>
        <ActionIcon>
          <Avatar size={28} radius="xl" />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={async () => {
            //TODO : Do redirect code
          }}
          icon={<TbUser size={14} />}
        >
          My account
        </Menu.Item>
        <Menu.Item
          onClick={async () => {
            Storage.clearAll();
            toast.success("Logout successful");
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
