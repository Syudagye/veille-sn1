import { Pool } from "mariadb";

var _pool: Pool;

export function setPool(pool: Pool) {
    _pool = pool
}

export function getPool(): Pool {
    return _pool
}
