const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, role: user.role ,user };
};

module.exports = createTokenUser;
