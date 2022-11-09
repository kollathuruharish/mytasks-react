import Students from "../Students"

export function getAllStudents(){
    return{
        type:"GET_ALL_STUDENTS"
    }
}
export function getAllSubjects(){
    return{
        type:"GET_ALL_SUBJECTS"
    }
}
export function deleteStudents(student){
    return{
        type:"DELETE_STUDENTS",
        payload:Students
    }
}
export function createStudents(Students){
    return {
        type:"CREATE_STUDENTSDETAILS",
        payload:Students
    }
}