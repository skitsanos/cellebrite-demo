import {useDeviceDetector} from '@/entities';
import {PageHeader} from 'antd';
import React from 'react';

const ContentArea = props =>
{
    const [{isMobile}] = useDeviceDetector();

    return <div className={'full-width'}>
        <PageHeader title={props.title}
                    subTitle={!isMobile && props.subTitle}
                    avatar={props.avatar}
                    extra={props.extra}
                    breadcrumb={props.breadcrumb}
                    onBack={props.onBack}
                    className={'ContentAreaHeader'}>{props.content}</PageHeader>

        {isMobile && <div className={'p-xxl pt silent'}>{props.subTitle}</div>}
        {props.children}
    </div>;
};

export default ContentArea;