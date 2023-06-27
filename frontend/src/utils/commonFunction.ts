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

export function isValidURL(url: string): boolean {
  const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i');

    return !!urlPattern.test(url);
}