FROM node:alpine
COPY . .
EXPOSE 80

ENV PORT=80
CMD ["sh", "start.sh"]
