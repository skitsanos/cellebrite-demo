import {Button, Result} from 'antd';
import React from 'react';
import {history} from 'umi';

const ErrorPage = props =>
{
    const {status = 'error', title, subTitle} = props;

    return <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }}>
        <Result
            status={status}
            title={title}
            subTitle={subTitle}
            extra={<Button onClick={() => history.goBack()}
                           type="primary">Go Back</Button>}/>
    </div>;
};

export default ErrorPage;