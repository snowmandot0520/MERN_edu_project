import { useState, useEffect } from 'react';

import { Loader } from '@mantine/core';
import { useParams } from "react-router-dom";
import { GET } from 'src/services/HttpService';

import { getApiErrorMessage } from 'src/utils/commonFunction';
import toast from 'src/utils/Toast';

const UrlLinks = () => {
    const { urlId = '' } = useParams();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetchLink(urlId);
    }, [urlId]);

    const fetchLink = async (urlId: string) => {
        setLoading(true);
        try {
            const data = await GET({ subUrl: `/url/${urlId}` });
            const originalUrl = data.data.data.originalUrl;

            window.location.href = originalUrl;
        } catch (error) {
            const message = getApiErrorMessage(error);
            message && toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return isLoading ?
        <div className='link-find-loader'>
            <Loader />
        </div> : null;
};

export default UrlLinks;