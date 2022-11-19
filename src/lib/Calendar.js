import './Style.css';

const Modes = {
    FullDate: "fullDate",
    Week: "week",
    DayAndMonth: "dayAndMonth",
}

function CalendarPicker({ mode, onSelect, containerStyle, cellStyle }) {
    var globalWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const getWeek = () => {

        let curr = new Date();
        let week = []
        for (let i = 0; i <= 6; i++) {
            let first = curr.getDate() - curr.getDay() + i 
            let day = new Date(curr.setDate(first))
            week.push(day)
        }

        const handleClick = (date) => {
            {onSelect(date)}
        }

        return (
            <div 
                className="container"
                style={containerStyle && containerStyle}>  
                {
                    week.map((i, k) => (
                        <button
                            key={k}
                            value={i.getUTCDay()}
                            className="cell"
                            style={cellStyle ? [cellStyle, i == curr && {backgroundColor: 'black'}] : {}}
                            onClick={() => handleClick(i)}
                        >
                           
                            {
                                mode === Modes.FullDate ?
                                String(i.getDate()) + "/" + String(i.getMonth()+1) + "/" + String(i.getFullYear())
                                :
                                mode === Modes.Week ?
                                globalWeek[i.getDay()]
                                :
                                mode === Modes.DayAndMonth &&
                                String(i.getDate()) + "/" + String(i.getMonth()+1)
                            }
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

export {CalendarPicker, Modes};