export const getApiErrorMessage = (error: any) => {
    return error?.response?.data?.message;
};