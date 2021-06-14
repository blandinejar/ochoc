const { Brand, Product, User, Tag } = require('../models/');
const bcrypt = require('bcrypt');

const mainController = {
    signUpPage: (request, response) => {
        response.render('signup');
    },












    loginPage: (request, response) => {
        response.render('login');
    },
    
    loginAction: async (request, response) => {
        try {
          //    console.log(req.body);
          // on tente de récupérer l'utilisateur qui possède l'email donné
          const user = await User.findOne({
            where: {
              email: request.body.email
            }
          });
          if (!user) {
            return response.render('login', {
              error: "Cet email n'existe pas."
            });
          }
    
          // Si on a un utilisateur, on teste si le mot de passe est valide
          const validPwd = await bcrypt.compare(request.body.password, user.password);
          if (!validPwd) {
            return response.render('login', {
              error: "Ce n'est pas le bon mot de passe."
            });
          }
    
          // si tout va bien, on met l'utilisateur en session...
          request.session.user = user;
          //... mais on supprime son mdp !
          delete request.session.user.password;
          // et on repart sur la page d'accueil
          return response.redirect('/');
    
        } catch (err) {
          console.trace(err);
          response.status(500).send(err);
        }
      },
};

module.exports = mainController;