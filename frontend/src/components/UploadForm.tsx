import { useState, useCallback } from "react";
import { Button, Group } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import Dropzone from "./Dropzone/Dropzone";
import FilesList from "./FilesList/FilesList";

const UploadForm = () => {
  const [isUploading] = useState(false);

  const validationSchema = yup.object().shape({
    files: yup.mixed(),
  });

  const form = useForm({
    initialValues: {
      files: [],
    },
    validate: yupResolver(validationSchema),
  });

  const { values, setFieldValue } = form;

  const onSetFiles = useCallback(
    (newFiles: File[]) => {
      const allFiles = [...values.files, ...newFiles];

      setFieldValue("files", allFiles as any);
    },
    [values.files]
  );

  const onRemoveFiles = useCallback((files:any) => {
    setFieldValue("files", files);
  }, []);

  const onSubmit = (values: File[]) => {
    console.log("onSubmit Files", values);
  };

  return (
    <>
      <form onSubmit={form.onSubmit((values) => onSubmit(values as any))}>
        <Group position="right" mb={20}>
          <Button
            type="submit"
            loading={isUploading}
            disabled={values?.files.length <= 0}
          >
            Upload
          </Button>
        </Group>
        <Dropzone isUploading={isUploading} setFiles={onSetFiles} />
      </form>
      {values?.files.length > 0 && (
        <FilesList files={values?.files} setFiles={onRemoveFiles} />
      )}
    </>
  );
};

export default UploadForm;
