import React, { useState } from 'react';

import { ActionIcon, TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import { TbCopy } from 'react-icons/tb';
import { useForm, yupResolver } from '@mantine/form';
import { POST } from 'src/services/HttpService';
import { isValidURL } from 'src/utils/commonFunction';
import * as yup from 'yup';

import { getApiErrorMessage } from 'src/utils/commonFunction';
import toast from 'src/utils/Toast';

export const UrlForm: React.FC = (props: TextInputProps) => {
    const theme = useMantineTheme();

    const [isLoading, setLoading] = useState(false);

    const validationSchema = yup.object().shape({
        originalUrl: yup.string()
            .test('validateWebsite', 'Please enter valid URL', (val) => {
                if (val && !isValidURL(val)) {
                    return false;
                }
                return true;
            }).required('Please enter a URL'),
    });

    const form = useForm({
        initialValues: {
            originalUrl: ''
        },
        validate: yupResolver(validationSchema),
    });

    const onShortURL = async (values: any) => {
        setLoading(true);
        const { originalUrl } = values;
        try {
            const data = await POST({
                subUrl: '/url/short',
                data: {
                    originalUrl,
                },
            });

            const shortUrl = data?.data?.data?.shortUrl;

            navigator.clipboard
                .writeText(shortUrl)
                .then(() => {
                    toast.success('Copied shortlink to clipboard!');
                    form.reset();
                }).catch(() => {
                    toast.error('Error in Copy shortlink');
                });
        } catch (error) {
            const message = getApiErrorMessage(error);
            message && toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={form.onSubmit((values) => onShortURL(values))}>
            <TextInput
                icon={null}
                radius="xl"
                size="lg"
                rightSection={
                    <ActionIcon type='submit' size={40} radius="xl" color={theme.primaryColor} variant="filled" loading={isLoading} disabled={isLoading}>
                        <TbCopy size="1.1rem" />
                    </ActionIcon>
                }
                placeholder="Enter URL"
                rightSectionWidth={52}
                {...form.getInputProps('originalUrl')}
            />
        </form>
    );
};

export default UrlForm;