import {apiDelete, endpoints} from '@/api';
import DataBrowser from '@/components/DataBrowser';
import {Icons} from '@/utils/icons';
import {useEventEmitter} from 'ahooks';
import {Button, Card, message, Modal, Rate, Space} from 'antd';
import React from 'react';
import {history} from 'umi';

const {confirm} = Modal;

export default () =>
{
    const reload = useEventEmitter();

    const columns = [
        {
            title: 'Type',
            dataIndex: 'type'
        },
        {
            title: 'Serial',
            dataIndex: 'serial'
        },
        {
            title: 'Color',
            dataIndex: 'color'
        },
        {
            title: 'Condition',
            render: row => <Rate defaultValue={row.meta.condition || 0}
                                 disabled={true}/>
        },
        {
            width: '7.8rem',
            render: row =>
            {
                return <Space>
                    <Button icon={Icons.EDIT}
                            onClick={() => history.push(`/phones/edit/${row._key}`)}/>
                    <Button icon={Icons.DELETE}
                            onClick={() =>
                            {
                                confirm({
                                    title: `Deleting a phone`,
                                    content: `You are about to delete Phone #${row.serial} and its all associated data. Continue?`,
                                    onOk()
                                    {
                                        apiDelete(`${endpoints.phones}/${row._key}`).then(() =>
                                        {
                                            reload.emit();
                                        }).catch(err =>
                                        {
                                            message.error(err.errorMessage);
                                        });
                                    },
                                    onCancel()
                                    {
                                        reload.emit();
                                    }
                                });
                            }}/>
                </Space>;
            }
        }
    ];
    return <DataBrowser title={'Phones'}
                        $reload={reload}
                        subTitle={'Phones at the warehouse'}
                        avatar={{icon: Icons.PROJECTS}}
                        columns={columns}
                        routeAdd={'/phones/create'}
                        url={endpoints.phones}
                        mobileRowRender={(row, key) =>
                        {
                            return <Card key={key}>
                                <div>{row.type}</div>
                                <div>{row.serial}</div>
                                <div>{row.color}</div>
                            </Card>;
                        }}/>;
};