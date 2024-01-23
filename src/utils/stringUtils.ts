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

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
}
