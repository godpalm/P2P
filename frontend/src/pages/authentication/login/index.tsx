import { Button, Card, Form, Input, message } from "antd";

import { useNavigate } from "react-router-dom";

import { SignIn } from "../../../services/https";

import type { SignInInterface } from "../../../interfaces/SignIn";

import logo from "../../../../public/logo.png";

import './index.css';


function SignInPages() {

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const handleRegisterClick = () => {
    console.log('Register button clicked');
    setTimeout(() => {
      navigate('/authentication/register'); // <-- ใช้ path ไปที่ login
    }, 100);
  };


  const onFinish = async (values: SignInInterface) => {

    let res = await SignIn(values);


    if (res.status == 200) {

      messageApi.success("Sign-in successful");

      localStorage.setItem("isLogin", "true");

      localStorage.setItem("page", "dashboard");

      localStorage.setItem("token_type", res.data.token_type);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("id", res.data.id);

      setTimeout(() => {

        location.href = "/";

      }, 2000);

    } else {

      messageApi.error(res.data.error);

    }

  };


  return (
    <>
      {contextHolder}
      <div className="login">
        <Card className="card-login">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              alt="logo"
              src={logo}
              className="images-logo"
            />

            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
              style={{ width: '100%' }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ marginBottom: 20 }}
                >
                  Log in
                </Button>
                Or <button className="login-btn" onClick={handleRegisterClick}>
                  Register
                </button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </>
  );

}


export default SignInPages;