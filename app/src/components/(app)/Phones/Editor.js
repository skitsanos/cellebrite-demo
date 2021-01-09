import {apiPost, apiPut, endpoints} from '@/api';
import {StackedLabelLayout} from '@/utils/FormLayout';
import FrownOutlined from '@ant-design/icons/lib/icons/FrownOutlined';
import MehOutlined from '@ant-design/icons/lib/icons/MehOutlined';
import SmileOutlined from '@ant-design/icons/lib/icons/SmileOutlined';
import {useRequest} from 'ahooks';
import {Button, Card, Col, Form, Input, notification, Rate, Row, Select} from 'antd';
import React, {useEffect} from 'react';
import {history} from 'umi';

const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16}
};
const {Option} = Select;

const customIcons = {
    1: <FrownOutlined/>,
    2: <FrownOutlined/>,
    3: <MehOutlined/>,
    4: <SmileOutlined/>,
    5: <SmileOutlined/>
};

const Editor = props =>
{
    const {mode = 'create', item = {}, loading, id} = props;

    const {data: apiResult, loading: apiLoading, error: apiError, run: apiRun} = useRequest(payload =>
            mode === 'create' ? apiPost(`${endpoints.phones}`, {data: payload}) : apiPut(`${endpoints.phones}/${id}`, {data: payload}),
        {
            manual: true
        });

    useEffect(() =>
    {
        if (apiError)
        {
            const {errorNum, exception, errorMessage} = apiError.data;
            if (errorNum === 400)
            {
                notification.error({message: 'Error', description: exception});
            }
            else
            {
                notification.error({message: 'Error', description: errorMessage});
            }
            return;
        }

        if (Boolean(apiResult) && !Boolean(apiError))
        {
            notification.info({
                message: 'Saved'
            });

            history.push(`/phones`);
        }
    }, [apiError, apiResult]);

    const onSubmit = async values =>
    {
        await apiRun(values);
    };

    return <Card loading={loading}>
        <Form {...StackedLabelLayout} onFinish={onSubmit}
              initialValues={item}>

            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Form.Item name={'type'}
                               label={'Type'}
                               required={true}
                               rules={[
                                   {
                                       required: true,
                                       message: 'Required'
                                   }
                               ]}>

                        <Select placeholder={'Select...'}>
                            <Option value={'android'}>Android</Option>
                            <Option value={'ios'}>iOS</Option>
                            <Option value={'other'}>Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name={'serial'}
                               label={'Serial'}
                               required={true}
                               rules={[
                                   {
                                       required: true,
                                       message: 'Required'
                                   }
                               ]}>
                        {/*<Input suffix={<Button size={'small'} icon={<ThunderboltOutlined/>}>Generate</Button>}/>*/}
                        <Input placeholder={'Type here...'}
                               autoComplete={'Off'}
                               autoCorrect={'Off'}/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item name={'color'}
                               label={'Color'}
                               required={true}
                               rules={[
                                   {
                                       required: true,
                                       message: 'Required'
                                   }
                               ]}>

                        <Select placeholder={'Select...'}>
                            <Option value={'black'}>Black</Option>
                            <Option value={'red'}>Red</Option>
                            <Option value={'space-gray'}>Space Gray</Option>
                            <Option value={'other'}>Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name={['meta', 'condition']}
                               label={'Condition'}>

                        {/*<Rate character={({index}) => customIcons[index + 1]}/>*/}
                        <Rate/>
                    </Form.Item>
                </Col>
            </Row>

            <div className={'mt'}>
                <Button type={'primary'}
                        loading={apiLoading}
                        htmlType={'submit'}
                        className={'mr'}
                        color={'primary'}>Save</Button>
            </div>
        </Form>
    </Card>;
};

export default Editor;