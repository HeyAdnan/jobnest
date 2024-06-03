import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast, Bounce } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const Dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSumbit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all the details", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    if (isMember) {
      Dispatch(loginUser({ email, password }));
      return;
    }
    Dispatch(registerUser({ name, email, password }));
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, );
    }
  }, [user]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSumbit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* name field*/}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="name"
          />
        )}
        {/* email field*/}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        {/* password field*/}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <button type="button" className="btn btn-block" disabled={isLoading} onClick={()=>Dispatch(loginUser({email:'testUser@test.com',password:'secret'}))}>
          {isLoading ? "Loading..." : "demo user"}
        </button>
        <p>
          {values.isMember ? "Need to register?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
