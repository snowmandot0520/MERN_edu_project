export const getApiErrorMessage = (error: any | {[key: string]: string}) : string => error?.response?.data?.message;

export const byteStringToHumanSizeString = (bytes: string): string => {
  const bytesNumber = parseInt(bytes);
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  if (bytesNumber === 0) {return '0 Byte';}
  const i = parseInt(
    Math.floor(Math.log(bytesNumber) / Math.log(1024)).toString()
  );
  return (
    `${(bytesNumber / 1024**i).toFixed(1).toString()  } ${  sizes[i]}`
  );
};
