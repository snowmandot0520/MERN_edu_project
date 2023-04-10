import React from 'react';

import { ActionIcon, TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import { TbCopy } from 'react-icons/tb';


export const InputWithButton: React.FC = (props: TextInputProps) => {
    const theme = useMantineTheme();

    return (
        <TextInput
            icon={null}
            radius="xl"
            size="lg"
            rightSection={
                <ActionIcon size={40} radius="xl" color={theme.primaryColor} variant="filled">
                    <TbCopy size="1.1rem" />
                </ActionIcon>
            }
            placeholder="Enter URL"
            rightSectionWidth={52}
            {...props}
        />
    );
};

export default InputWithButton;