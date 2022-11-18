import './Style.css';

function CalendarPicker({ onSelect, containerStyle, cellStyle }) {
    const getWeek = () => {
        let curr = new Date();
        let week = []
        for (let i = 0; i <= 6; i++) {
            let first = curr.getDate() - curr.getDay() + i 
            let day = new Date(curr.setDate(first))
            week.push(day)
          }

        return (
            <div 
                className="container"
                style={containerStyle && containerStyle}>  
                {
                    week.map((i, k) => (
                        <button
                            key={k}
                            className="cell"
                            style={cellStyle ? [cellStyle, i == curr && {backgroundColor: 'black'}] : {}}
                            onClick={onSelect}
                        >
                            {String(i.getUTCDay())} 
                        </button>
                    ))
                }
            </div>
        )
    }

    return(
        <div>
            {getWeek()}
        </div>
    );
}

export default CalendarPicker;