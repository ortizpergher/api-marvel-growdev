"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = (request, response, next) => {
  const { protocol, url, method, ip } = request;

  console.log(`Method: ${method}`);
  console.log(`${protocol}://${request.get("host")}${url}`);
  console.log(`IP: ${ip}`);

  next();
};
