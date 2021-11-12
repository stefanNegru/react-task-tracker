import  Task  from './Task'


export const Tasks = ({ tasks1, onDelete2, onToggle }) => {
    
    return (
        <>
            {tasks1.map((task, index) => (
                <Task 
                    key={index} 
                    task={task} 
                    onDelete1={onDelete2}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Task