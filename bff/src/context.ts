import { CatalogueDataSource } from "./datasource/catalogue";

export interface ContextType {
  dataSources: {
    catalogueApi: CatalogueDataSource;
  };
}
