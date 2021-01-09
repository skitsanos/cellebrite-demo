import Editor from '@/components/(app)/Phones/Editor';
import ContentArea from '@/components/ContentArea';
import {Icons} from '@/utils/icons';
import React from 'react';
import {history} from 'umi';

export default props =>
{
    const {mode = 'create'} = props;

    return <ContentArea className={'PageHeader'}
                        onBack={() => history.push(`/phones`)}
                        avatar={{icon: Icons.EDIT}}
                        title={'Phones'}
                        subTitle={mode === 'create' ? 'Adding new Phone' : 'Modifying Phone details'}>
        <Editor {...props} />
    </ContentArea>;
};