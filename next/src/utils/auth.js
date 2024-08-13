const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const prisma = require('@prisma/client');

passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await prisma.user.findUnique({ where: { username } });
  
        if (!user) {
          return done(null, false, { message: 'Benutzer nicht gefunden' });
        }
  
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
          return done(null, false, { message: 'Ungültiges Passwort' });
        }
  
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
  
  module.exports = passport;