import {

  Button,

  Card,

  Form,

  Input,

  message,

  Flex,

  Row,

  Col,

  InputNumber,

  DatePicker,


} from "antd";

import { useNavigate } from "react-router-dom";

import type { UsersInterface } from "../../../interfaces/IUser";

import { CreateUser } from "../../../services/https";

import logo from "../../../../public/logo.png";


function SignUpPages() {

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();


  const onFinish = async (values: UsersInterface) => {

    let res = await CreateUser(values);


    if (res.status == 201) {

      messageApi.open({

        type: "success",

        content: res.data.message,

      });

      setTimeout(function () {

        navigate("/");

      }, 2000);

    } else {

      messageApi.open({

        type: "error",

        content: res.data.error,

      });

    }

  };



  return (

    <>

      {contextHolder}

      <Flex justify="center" align="center" className="login">

        <Card className="card-login" style={{ width: 600 }}>

          <Row align={"middle"} justify={"center"}>

            <Col xs={24} sm={24} md={24} lg={10} xl={10}>

              <img alt="logo" src={logo} className="images-logo" />

            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>

              <h2 className="header">Sign Up</h2>

              <Form

                name="basic"

                layout="vertical"

                onFinish={onFinish}

                autoComplete="off"

              >

                <Row gutter={[16, 0]} align={"middle"}>

                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                    <Form.Item

                      label="ชื่อจริง"

                      name="first_name"

                      rules={[

                        {

                          required: true,

                          message: "กรุณากรอกชื่อ !",

                        },

                      ]}

                    >

                      <Input />

                    </Form.Item>

                  </Col>


                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                    <Form.Item

                      label="นามกสุล"

                      name="last_name"

                      rules={[

                        {

                          required: true,

                          message: "กรุณากรอกนามสกุล !",

                        },

                      ]}

                    >

                      <Input />

                    </Form.Item>

                  </Col>


                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                    <Form.Item

                      label="อีเมล"

                      name="email"

                      rules={[

                        {

                          type: "email",

                          message: "รูปแบบอีเมลไม่ถูกต้อง !",

                        },

                        {

                          required: true,

                          message: "กรุณากรอกอีเมล !",

                        },

                      ]}

                    >

                      <Input />

                    </Form.Item>

                  </Col>


                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>

                    <Form.Item

                      label="รหัสผ่าน"

                      name="password"

                      rules={[

                        {

                          required: true,

                          message: "กรุณากรอกรหัสผ่าน !",

                        },

                      ]}

                    >

                      <Input.Password />

                    </Form.Item>

                  </Col>


                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>

                    <Form.Item

                      label="วัน/เดือน/ปี เกิด"

                      name="birthday"

                      rules={[

                        {

                          required: true,

                          message: "กรุณาเลือกวัน/เดือน/ปี เกิด !",

                        },

                      ]}

                    >

                      <DatePicker style={{ width: "100%" }} />

                    </Form.Item>

                  </Col>

                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>

                    <Form.Item

                      label="อายุ"

                      name="age"

                      rules={[

                        {

                          required: true,

                          message: "กรุณากรอกอายุ !",

                        },

                      ]}

                    >

                      <InputNumber

                        min={0}

                        max={99}

                        defaultValue={0}

                        style={{ width: "100%" }}

                      />

                    </Form.Item>

                  </Col>

                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                    <Form.Item>

                      <Button

                        type="primary"

                        htmlType="submit"

                        className="login-form-button"

                        style={{ marginBottom: 20 }}

                      >

                        Sign up

                      </Button>

                      Or <a onClick={() => navigate("/")}>signin now !</a>

                    </Form.Item>

                  </Col>

                </Row>

              </Form>

            </Col>

          </Row>

        </Card>

      </Flex>

    </>

  );

}


export default SignUpPages;