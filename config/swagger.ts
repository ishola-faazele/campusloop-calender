import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CampusLoop Calender',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3002/api',
      },
    ],
  },
  tags: [
    {
      name: 'Calender',
      description: 'Endpoints for adding events to calender',
    },
  ],
  apis: [path.join(process.cwd(), 'src', '**', '*.ts')],
};

const swaggerDocument = swaggerJsDoc(options);

export function setupSwagger(app: express.Express) {
  app.use(
    '/api/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true,
    })
  );
}
