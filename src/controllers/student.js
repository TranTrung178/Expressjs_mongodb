const getStudent = async (req, res) => {
    res.status(200).json({
        message: 'Get student successfully',
        data: [
            {
                email: 'trung@gmail.com',
                name: 'trung',
                age: 22
            },
            {
                email: 'thien@gmail.com',
                name: 'thien',
                age: 20
            }
        ]
    })
}

const getStudentDetail = async (req, res) => {
    res.send(`GET student by id`)
}

const insert = async (req, res) => {
    res.send(`POST insert student`)
}

const updateStudent = async (req, res) => {
    res.send(`Update student`)
}

export default{
    getStudent,
    getStudentDetail, 
    insert,
    updateStudent
}