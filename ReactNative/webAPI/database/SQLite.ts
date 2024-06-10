import * as SQLite from 'expo-sqlite';

function getConnection(): SQLite.SQLiteDatabase {
    const database = SQLite.openDatabase("db.db");
    return database;
}

export default getConnection;