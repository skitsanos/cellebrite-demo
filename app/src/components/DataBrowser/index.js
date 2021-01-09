/**
 * DataView.
 *
 * -- DO NOT TOUCH --
 *
 * @version 2.0.20210108
 * @author skitsanos
 */
import {apiGet} from '@/api';
import ContentArea from '@/components/ContentArea';
import {useDeviceDetector} from '@/entities';
import {Icons} from '@/utils/icons';
import {useRequest, useUpdateEffect} from 'ahooks';
import {Button, Card, Form, Input, Pagination, Spin, Table} from 'antd';
import React from 'react';
import {history} from 'umi';

const getTableData = (url, {current, pageSize, query = ''}) =>
{
    const skip = current === 1 ? 0 : (current - 1) * pageSize;

    const q = query !== '' ? `${query}` : '';

    return apiGet(`${url}?skip=${skip}&pageSize=${pageSize}&q=${q}`).then(res => ({
        total: res.result.total,
        data: res.result.data
    }));
};

const DataBrowser = props =>
{
    const {
        avatar,
        onBack,
        title,
        subTitle,
        url = 'http://localhost/api',
        columns,
        rowKey = '_key',
        rowClassName = '',
        routeAdd,
        expandedRowRender,
        $reload,
        summary = [],
        mobileRowRender
    } = props;

    const [{isMobile}] = useDeviceDetector();

    const {data, run, loading, pagination, refresh} = useRequest(({current, pageSize, sorter, query}) => getTableData(url, {
        current,
        pageSize,
        sorter,
        query,
        filter: ''
    }), {
        paginated: true,
        defaultPageSize: 10
    });

    if (Object.prototype.hasOwnProperty.call(props, '$reload'))
    {
        $reload.useSubscription(() => refresh());
    }

    useUpdateEffect(async () =>
    {
        await refresh();
    }, [props]);

    return <ContentArea onBack={onBack}
                        avatar={avatar}
                        className={'PageHeader'}
                        ghost={false}
                        title={title}
                        subTitle={subTitle}
                        extra={[
                            <React.Fragment key={'button-add'}>{routeAdd && <Button
                                icon={Icons.ADD}
                                type={'primary'}
                                onClick={() => history.push(routeAdd)}>Add</Button>}
                            </React.Fragment>
                        ]}>
        {summary}

        <Spin spinning={loading}>
            <Card>
                <Form>
                    <Form.Item name={'q'}>
                        <Input.Search autoComplete={'off'}
                                      autoCorrect={'off'}
                                      loading={loading}
                                      onSearch={v =>
                                          run({
                                              query: v,
                                              current: 1,
                                              pageSize: pagination.pageSize
                                          })
                                      }
                                      placeholder={'Type to search and hit enter'}
                                      enterButton={true}/>
                    </Form.Item>
                </Form>
            </Card>

            <Card>
                {!isMobile && <Table dataSource={data?.data}
                                     pagination={false}
                                     columns={columns}
                                     expandedRowRender={expandedRowRender}
                                     rowClassName={rowClassName}
                                     rowKey={rowKey}/>}

                {isMobile && mobileRowRender && data?.data.map(mobileRowRender)}

                <Pagination
                    {...pagination}
                    showQuickJumper
                    showSizeChanger
                    style={{marginTop: 16, textAlign: 'right'}}
                />
            </Card>
        </Spin>
    </ContentArea>;
};

export default DataBrowser;