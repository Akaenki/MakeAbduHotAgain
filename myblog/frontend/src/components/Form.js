import React from 'react';
import axios from 'axios';
import {
  Form, Input, Button, Radio,
} from 'antd';

const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 8 },
};

const formTailLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 8, offset: 2},
};

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, foodID) => {
        //event.preventDefault();

        const data = {
            Name: event.target.elements.Name.value,
            Carbonhydrates: event.target.elements.Carb.value,
            Fiber: event.target.elements.Fiber.value,
            Protein: event.target.elements.Protein.value,
            Fat: event.target.elements.Fat.value
        };

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', data)
                .then(res => console.log(res))
                .catch(error => console.log(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${foodID}/`, data)
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
        //console.log("debug messages", data)
    }

    render() {
        return (
          <div>
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.foodID)}>
              <Form.Item {...formItemLayout} label="Name">
                <Input name="Name" placeholder="Food Name" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Carb">
                <Input name="Carb" placeholder="Carbonhydrate in gram" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Fiber">
                <Input name="Fiber" placeholder="Fiber in gram" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Protein">
                <Input name="Protein" placeholder="Protein in gram" />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Fat">
                <Input name="Fat" placeholder="Fat in gram" />
              </Form.Item>
              <Form.Item {...formTailLayout} >
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
              </Form.Item>
            </Form>
          </div>
        );
    }
};

export default CustomForm;