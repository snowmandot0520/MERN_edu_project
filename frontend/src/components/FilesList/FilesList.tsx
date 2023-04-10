import { ActionIcon, Table } from '@mantine/core';
import { CheckboxGroup } from '@mantine/core/lib/Checkbox/CheckboxGroup/CheckboxGroup';
import { TbTrash } from 'react-icons/tb';

import { byteStringToHumanSizeString } from 'src/utils/commonFunction';

interface IFilesList {
  files: File[];
  setFiles: (files: File[]) => void;
}

const FilesList = ({ files, setFiles }: IFilesList) => {
  const remove = (index: number) => {
    files.splice(index, 1);
    setFiles([...files]);
  };

  const rows = files.map((file: File, i: number) => (
    <tr key={i}>
      <td>{file.name}</td>
      <td>{byteStringToHumanSizeString(file.size.toString())}</td>
      <td>
        <ActionIcon
          color="red"
          variant="light"
          size={25}
          onClick={() => remove(i)}
        >
          <TbTrash />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default FilesList;
