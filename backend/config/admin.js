module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4034cc96dda4da913abc7ef0ded99db7'),
  },
});
