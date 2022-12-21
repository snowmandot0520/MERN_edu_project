import { Button, Center, createStyles, Group, Text } from "@mantine/core";
import { Dropzone as MantineDropzone } from "@mantine/dropzone";
import { ForwardedRef, useRef } from "react";
import { TbCloudUpload, TbUpload } from "react-icons/tb";
import toast from "../../utils/Toast";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    bottom: -20,
  },
}));

interface IDropzone {
  isUploading: boolean;
  setFiles: (files: File[]) => void;
}

const Dropzone = ({ isUploading, setFiles }: IDropzone) => {
  const { classes } = useStyles();
  const openRef = useRef<() => void>();
  return (
    <div className={classes.wrapper}>
      <MantineDropzone
        // maxSize={}
        onReject={(e: any) => {
          toast.error(e[0].errors[0].message);
        }}
        disabled={isUploading}
        openRef={openRef as ForwardedRef<() => void>}
        onDrop={(files: File[]) => {
          const newFiles = files.map((file: File) => {
            return file;
          });
          setFiles(newFiles);
        }}
        className={classes.dropzone}
        radius="md"
      >
        <div style={{ pointerEvents: "none" }}>
          <Group position="center">
            <TbCloudUpload size={50} />
          </Group>
          <Text align="center" weight={700} size="lg" mt="xl">
            Upload files
          </Text>
          <Text align="center" size="sm" mt="xs" color="dimmed">
            Drag&apos;n&apos;drop files here.
          </Text>
        </div>
      </MantineDropzone>
      <Center>
        <Button
          className={classes.control}
          variant="light"
          size="sm"
          radius="xl"
          disabled={isUploading}
          onClick={() => openRef.current && openRef.current()}
        >
          <TbUpload />
        </Button>
      </Center>
    </div>
  );
};
export default Dropzone;
