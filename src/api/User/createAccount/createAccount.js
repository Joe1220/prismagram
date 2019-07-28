import { prisma } from "../../../../generated/prisma-client";

 export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, firstName = "", lastName = "", bio = "" } = args;
      const exists = prisma.$exists.user({ username })
      console.log('check exist: ', exists)
      if(exists) {
        throw Error("This username is already taken")
      }
      await prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio
      });
      return true;
    }
  }
};