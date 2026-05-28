export const fetchStudents = async () => {
  const response = await fetch('https://6a178e231878294b597b9447.mockapi.io/api/v1/students')

  return await response.json()
}
