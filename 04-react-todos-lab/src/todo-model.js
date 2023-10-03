export const TodoStatus = [
    'Active', 'Completed', 'Canceled'
]
export const Active = 0;
export const Completed = 1
export const Canceled = 2

export class Todo {
    constructor(text, deadline = toIsoDate(new Date()), status = Active, id){
        this.text = text;
        this.deadline = deadline;
        this.status = status;
    }
}

export function toIsoDate(date){
    return date.toISOString().split('T')[0];
}