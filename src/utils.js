import uuidv4  from 'uuid/v4'

export const generateSecret = () => {
  return uuidv4()
}