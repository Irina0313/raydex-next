import { Form, Input, Select, Button } from "antd";

import styles from "./contactForm.module.css";
import CustomButton from "../../button";
import { useState } from "react";

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
  const [form] = Form.useForm();
  const [formAction, setFormAction] = useState("../../../utils/mail.php");

  const onFinish = async (values: any) => {
    console.log("Success:", values);

    // Update the form action dynamically
    form.submit();

    try {
      // Send form data to the server using fetch
      const response = await fetch(formAction, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        // Additional logic after successful form submission
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (e) {
      console.error("Error submitting form:", e);
    }
  };

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
        action={formAction}
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
