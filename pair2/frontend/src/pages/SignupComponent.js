import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const Signup = () => {
  const username = useField("text");
  const email = useField("email");
  const password = useField("password");
  const { signup, error, isLoading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username.value, email.value, password.value);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Username:</label>
      <input {...username} />
      <label>Email address:</label>
      <input {...email} />
      <label>Password:</label>
      <input {...password} />
      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;