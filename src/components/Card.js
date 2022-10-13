const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
    const {id, title, des} = props; // destructuring
    return(
        <div className='card'>
            <p>{id}</p>
            <h4 className='cardTitle'>{title}</h4>
            <p className='cardDescription'>{des}</p>
            <p className='cardDate'>{currentDate + '/' + currentMonth + '/' + currentYear}</p>
            <button className='buttonStyle'>Click Here</button>
      </div>
    );
}

export default Card;