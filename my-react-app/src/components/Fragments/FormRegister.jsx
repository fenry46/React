import Button from "../Elements/Button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        name="fullname"
        type="text"
        placeholder="Insert Your Name Here..."
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="******"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
