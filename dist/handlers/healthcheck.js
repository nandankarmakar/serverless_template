"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHandler = void 0;
const postHandler = async (event) => {
    const reqBody = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: `Hello ${reqBody.name}`,
    };
};
exports.postHandler = postHandler;
//# sourceMappingURL=healthcheck.js.map