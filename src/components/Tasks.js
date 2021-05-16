import {Ckeckbox} from './Checkbox'

export const Tasks = () => {
    const tasks = []

    let projectName = ''

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid='project-name'>{projectName}</h2>

            <ul className="tasks_list">
                {tasks.map(task => {
                    <li keys={`${task.id}`}>
                        <Ckeckbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}