import Layout from "../components/layout";
import utilCss from "./../styles/login.module.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const postData = async (url, data) => {
  const response = await axios.post(url, data);
  return response.data;
};

export default function Login() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const response = await postData(
      "http://127.0.0.1:2300/api/v1/user",
      formData
    );
    if (response.status == "success") {
      console.log(response);
      router.push("/login");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  return (
    <Layout>
      <div className={utilCss.div}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="abc"
            className={utilCss.inputText}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="abc@mail.com"
            className={utilCss.inputText}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className={utilCss.inputText}
            onChange={handleChange}
          />
          <label htmlFor="confirmPassword">confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="*********"
            className={utilCss.inputText}
            onChange={handleChange}
          />

          <button type="submit" className={utilCss.inputSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  );
}
