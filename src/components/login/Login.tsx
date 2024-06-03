import React, { useState } from "react";

interface IAvatar {
  file: any;
  url: string;
}
const Login = () => {
  const [avatar, setAvatar] = useState<IAvatar>({ file: null, url: "" });
  const handleAvatar = (e: any) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">Upload an image</label>
          <img src={avatar.url || '/avatar.png'} alt="" />
          <input
            type="file"
            id="file"
            accept="**/image"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
