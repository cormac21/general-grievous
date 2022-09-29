FROM node:15.14-alpine
WORKDIR /general-grievous
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]