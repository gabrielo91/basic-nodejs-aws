FROM node:alpine
RUN mkdir code
COPY . code
EXPOSE 80

ENV PORT=80
CMD ["sh", "start.sh"]
