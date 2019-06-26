import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        hola(): string{
            return 'Hola Mundoddddd!';
        },
        holaConNombre(__: void, { nombre } ): string {
            return `Hola Mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola Mundo en el curso de GraphQL';
        }
    }
}

export default query;