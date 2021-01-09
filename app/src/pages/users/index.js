import ContentArea from '@/components/ContentArea';
import {Icons} from '@/utils/icons';
import React from 'react';

export default () =>
{
    return <ContentArea title={'Users'}
                        subTitle={'User Management and roles'}
                        avatar={{icon: Icons.USERS}}>
        content goes here
    </ContentArea>;
};