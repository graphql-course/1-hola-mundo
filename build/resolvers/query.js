"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = {
    Query: {
        hola() {
            return 'Hola Mundoddddd!';
        },
        holaConNombre(__, { nombre }) {
            return `Hola Mundo ${nombre}`;
        },
        holaAlCursoGraphQL() {
            return 'Hola Mundo en el curso de GraphQL';
        }
    }
};
exports.default = query;
