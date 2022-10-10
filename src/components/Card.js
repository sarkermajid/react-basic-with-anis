const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
    return(
        <div className='card'>
            <h4 className='cardTitle'>Call Family</h4>
            <p className='cardDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio nisi maxime rerum quibusdam, corrupti enim fuga voluptatem soluta mollitia.</p>
            <p className='cardDate'>{currentDate + '/' + currentMonth + '/' + currentYear}</p>
            <button className='buttonStyle'>Click Here</button>
      </div>
    );
}

export default Card;