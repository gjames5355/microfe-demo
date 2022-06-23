import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
// import { authenticate } from '../../../utils/authenticate';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials.username) throw new Error('username is required');
        if (!credentials.password) throw new Error('password required');

        // const loginResult = await authenticate(
        //   credentials.username,
        //   credentials.password,
        //   credentials.description,
        //   credentials.type,
        //   credentials.fingerprint
        // );

        if (
          credentials.username === 'gjames@veritext.com' &&
          credentials.password === 'wrong'
        ) {
          return {
            user: credentials.username,
            // sessiontoken: loginResult.session,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token.newuser) {
        session.user.info = token.newuser.user;
        // session.user.sessiontoken = token.newuser.sessiontoken;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.newuser = user;
      }
      return token;
    },
  },
  session: {
    jwt: true,
  },
});
