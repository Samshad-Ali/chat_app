import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="icon" />
        <h2>Sam Ali</h2>
        <p>Lorem ipsum dolor sit fdfoddjfdf.</p>

      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="icon" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="icon" />
          </div>
        </div>
         <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowUp.png" alt="icon" />
          </div>
            <div className="photos">
              <div className="photoItem">
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                <span>photo_33.png</span>
              </div>
              <img src="./download.png" alt="icon" />
            </div>
        </div> 
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="icon" />
          </div>
        </div>
       <button className="blockUser">Block User</button>
      </div>
      
    </div>
  )
}

export default Detail