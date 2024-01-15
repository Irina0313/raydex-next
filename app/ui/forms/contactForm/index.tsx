import { Form, Input, Select, Button } from "antd";

import styles from "./contactForm.module.css";
import CustomButton from "../../button";

const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  company?: string;
  surname?: string;
  name?: string;
  middleName?: string;
  message?: string;
};

const ContactForm = () => {
  return (
    <>
      <h2 className={styles.textCenter}>Задать вопрос</h2>
      <p className={styles.textCenter}>
        Пожалуйста, заполните форму ниже и наши специалисты свяжутся с Вами в
        ближайшее время.
      </p>
      <Form
        name="contactForm"
        method="POST"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        {...formItemLayout}
      >
        <Form.Item<FieldType>
          label="Компания"
          name="company"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите название компании",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Фамилия"
          name="surname"
          rules={[{ required: true, message: "Пожалуйста, введите фамилию" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Имя"
          name="name"
          rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Отчество"
          name="middleName"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Вопрос"
          name="message"
          rules={[{ required: true, message: "Пожалуйста, введите вопрос" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <CustomButton text="Отправить" htmlType="submit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactForm;
