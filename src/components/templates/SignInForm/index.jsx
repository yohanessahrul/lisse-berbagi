import Button from "../../elements/Button";
import InputGroups from "../../fragments/InputGroups";

const SignInForm = () => {
  return (
    <div className="flex flex-col gap-3">
      <InputGroups
        label="Name"
        type="text"
        placeholder="Enter your name">
      </InputGroups>

      <InputGroups
        label="Email"
        type="email"
        placeholder="Enter your email">
      </InputGroups>

      <InputGroups
        label="Password"
        type="password"
        placeholder="Enter your password">
      </InputGroups>

      <Button>Login</Button>
    </div>
  )
}

export default SignInForm;