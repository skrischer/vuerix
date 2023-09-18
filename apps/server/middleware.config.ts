import dotenv from 'dotenv';
dotenv.config();

const config = {
  integrations: {
    emporix: {
      location: '@medienwerft/emporix-api/server',
      configuration: {
        apiUrl: 'http://localhost:8181/emporix',
      },
    },
  },
};

export default config;
