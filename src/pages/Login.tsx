import { Button, Row } from "antd";

import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispath } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const defaultValues = {
  userId: "A-0001",
  password: "admin123",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();
  const [login, { data, error }] = useLoginMutation();

  console.log("error => ", error);

  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    const toastId = toast.loading("Logged in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      // console.log(userInfo);
      const res = await login(userInfo).unwrap();
      console.log("res: ", res);
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user.role);

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Loggin in", { id: toastId, duration: 1000 });
      navigate(`/${user.role}/dashboard`);
    } catch {
      toast.error("Somthing Went Wrong", { id: toastId, duration: 1000 });
    }
  };
  return (
    <Row style={{ height: "a00vh" }} justify="center" align="middle">
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="Id: "></PHInput>
        <PHInput type="text" name="password" label="Password: "></PHInput>
        <Button>Login</Button>
      </PHForm>
    </Row>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div>
    //     <label htmlFor="id">Id:</label>
    //     <input type="text" {...register("userId")} />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password:</label>
    //     <input type="text" {...register("password")} />
    //   </div>
    //   <Button htmlType="submit" style={{ border: "2px solid purple" }}>
    //     Login
    //   </Button>
    // </form>
  );
};

export default Login;
