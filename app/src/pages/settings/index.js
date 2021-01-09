import ContentArea from '@/components/ContentArea';
import {Icons} from '@/utils/icons';
import React from 'react';

export default () =>
{
    return <ContentArea title={'Settings'}
                        subTitle={'Application settings and configuration'}
                        avatar={{icon: Icons.SETTINGS}}>
        content goes here
    </ContentArea>;
};