/**
 * Edit User by $id page
 */
import {apiGet, endpoints} from '@/api';
import Editor from '@/components/(app)/Phones/Editor';
import ContentArea from '@/components/ContentArea';
import ErrorPage from '@/components/ErrorPage';
import {Icons} from '@/utils/icons';
import {useRequest} from 'ahooks';
import React from 'react';
import {history} from '@/.umi/core/history';

export default props =>
{
    const {match} = props;

    const {data, loading, error} = useRequest(() => apiGet(`${endpoints.phones}/${match.params.id}`), {
        paginated: false,
        refreshDeps: []
    });

    return error
        ? <ErrorPage status={'404'}
                     title={'No Data'}
                     subTitle={error.message}>Error</ErrorPage>
        : <ContentArea className={'PageHeader'}
                       onBack={() => history.push(`/phones`)}
                       avatar={{icon: Icons.EDIT}}
                       title={'Phones'}
                       subTitle={'Modifying phone details'}>
            <Editor {...props} mode={'edit'}
                    id={match.params.id}
                    loading={loading}
                    item={!loading ? data?.result : {}}/>
        </ContentArea>;
};