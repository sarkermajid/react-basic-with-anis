const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
    const {cardTitle, cardDes} = props; // destructuring
    return(
        <div className='card'>
            <h4 className='cardTitle'>{cardTitle}</h4>
            <p className='cardDescription'>{cardDes}</p>
            <p className='cardDate'>{currentDate + '/' + currentMonth + '/' + currentYear}</p>
            <button className='buttonStyle'>Click Here</button>
      </div>
    );
}

export default Card;