import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import { logger } from "logger";
import morgan from "morgan";

import { Routes } from "~/interfaces/routes.interface";
import errorMiddleware from "~/middlewares/error.middleware";

class App {
  public app: express.Application;

  constructor(routes: Routes[]) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(process.env.PORT || 3000, () => {
      logger.info(`=================================`);
      logger.info(`App listening on the port ${process.env.PORT || 3000}`);
      logger.info(`=== Environment: ${process.env.NODE_ENV} ===`);
      logger.info(`=================================`);
    });
  }

  private initializeMiddlewares() {
    this.app.disable("x-powered-by");
    this.app.use(
      morgan("dev", {
        stream: {
          write: (message: string) => {
            logger.info(message.substring(0, message.lastIndexOf("\n")));
          },
        },
      }),
    );
    this.app.use(cors({ origin: "*", credentials: true }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
