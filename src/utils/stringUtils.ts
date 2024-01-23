export const getFullName = ({
  firstname,
  lastname,
  middlename,
}: {
  firstname: string
  lastname: string
  middlename?: string
}) => {
  return `${firstname} ${middlename || ""} ${lastname}`.trim()
}
