import Conection from './SQLite';

const db = Conection();

export async function sql(SQL: string): Promise<any>{
    const response = await db.execAsync([{ sql: SQL, args: [] }], false);
    return response[0];
}
