import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'sa',
  password: 'sa1234',
  database: 'test-db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize();
export default dataSource;
