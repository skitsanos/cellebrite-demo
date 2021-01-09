import ContentArea from '@/components/ContentArea';
import {Wcircle, Wcontainer} from '@alicloud/cloud-charts';
import {Col, Divider, Row} from 'antd';
import React from 'react';

export default () =>
{
    return <ContentArea title={'Welcome'}
                        subTitle={'You are working in a demo mode'}>

        <Divider/>
        
        <Wcontainer>
            <Row>
                <Col span={6}>
                    <Wcircle
                        title={'Open'}
                        status={'success'}
                        trend={'raise'}
                        percent={0.72}>72</Wcircle>
                </Col>

                <Col span={6}>
                    <Wcircle type="gauge"
                             title={'Failed Unlocks'}
                             status={'warning'}
                             trend={'raise'}
                             bottomTitle={'Previously'}
                             bottomNumber={12}
                             percent={0.04}>4</Wcircle>
                </Col>

                <Col span={6}>
                    <Wcircle type="gauge"
                             title={'Inaccessible'}
                             status={'error'}
                             trend={'raise'}
                             bottomTitle={'Previously'}
                             bottomNumber={37}
                             percent={0.24}>24</Wcircle>
                </Col>

                <Col span={6}>
                    <Wcircle type="gauge"
                             title={'Queued'}
                             trend={'raise'}
                             bottomTitle={'Previously'}
                             bottomNumber={2}
                             percent={0.11}>11</Wcircle>
                </Col>
            </Row>
        </Wcontainer>

        <Divider/>


    </ContentArea>;
};