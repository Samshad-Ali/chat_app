import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [openEmoji,setopenEmoji] = useState<boolean>(false);
  const [text,setText] = useState<string>("");
  const emojiToggleHandler=():void=>{
    setopenEmoji(pre=>!pre)
  }
  const emojiHandler=(e:any):void=>{
    setText(pre=>pre+e.emoji)
    setopenEmoji(false)
  }
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="icon" />
          <div className="texts">
            <span>Sam Ali</span>
            <p>Hello, waass up !</p>
          </div>

        </div>
        <div className="icons">
          <img src="./phone.png" alt="icon" />
          <img src="./video.png" alt="icon" />
          <img src="info.png" alt="icon" />
        </div>
      </div>
      <div className="center">
       
        <div className="message">
          <img src="./avatar.png" alt="icon" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci provident ab enim animi maiores cupiditate, exercitationem suscipit neque voluptas nostrum sint quis consequatur tenetur cumque corrupti ex aut est.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="icon" />
          <div className="texts">
            <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci provident ab enim animi maiores cupiditate, exercitationem suscipit neque voluptas nostrum sint quis consequatur tenetur cumque corrupti ex aut est.</p>
            <span>just now</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="icon" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci provident ab enim animi maiores cupiditate, exercitationem suscipit neque voluptas nostrum sint quis consequatur tenetur cumque corrupti ex aut est.</p>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="icon" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci provident ab enim animi maiores cupiditate, exercitationem suscipit neque voluptas nostrum sint quis consequatur tenetur cumque corrupti ex aut est.</p>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="icon" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci provident ab enim animi maiores cupiditate, exercitationem suscipit neque voluptas nostrum sint quis consequatur tenetur cumque corrupti ex aut est.</p>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="icon" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci provident ab enim animi maiores cupiditate, exercitationem suscipit neque voluptas nostrum sint quis consequatur tenetur cumque corrupti ex aut est.</p>
          </div>
        </div>
 
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="icon" />
          <img src="./camera.png" alt="icon" />
          <img src="./mic.png" alt="icon" />


        </div>
        <input type="text" placeholder="Type a message."
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        />
        <div className="emoji">
          <img  src="./emoji.png" alt="icon" onClick={emojiToggleHandler} />
          <div className="emojiPicker">
          <EmojiPicker open={openEmoji} onEmojiClick={emojiHandler} />
          </div>
        </div>
      <button className="sendBtn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
