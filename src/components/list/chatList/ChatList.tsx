import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState<boolean>(false);
  const addbtnToggleHandler = (): void => {
    setAddMode((pre) => !pre);
  };
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="icon"
          className="add"
          onClick={addbtnToggleHandler}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>{" "}
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>{" "}
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>{" "}
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>{" "}
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>{" "}
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>{" "}
      <div className="item">
        <img src="./avatar.png" alt="icon" />
        <div className="texts">
          <span>Sam Ali</span>
          <p>Hello, hey there</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
