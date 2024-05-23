import './userInfo.css'

const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="./avatar.png" alt="avatar" />
            <h2>Sam Ali</h2>
        </div>
        <div className="icons">
            <img src="./more.png" alt="icon" />
            <img src="./video.png" alt="icon" />
            <img src="./edit.png" alt="icon" />
        </div>
    </div>
  )
}

export default UserInfo