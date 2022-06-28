import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => props.onToggle(props.task.id)}>
            <h3>
                {props.task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => props.onDelete(props.task.id)} />
            </h3>
            <p>{props.task.day}</p>
            <p> <Link to={`/task/${props.task.id}`}>View Details</Link></p>
        </div>
    )
}

export default Task