
const getAllStudents = async ({
    page, size, searchString
}) => {
    console.log('get all student with paging')
}

const insertStudents = async ({
    name, email, language, gender, phone, address
}) => {
    console.log('insert student')
}

export default {
    getAllStudents,
    insertStudents
}