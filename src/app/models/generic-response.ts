export interface GenericResponse<T> {
    message: string;
    status: string;
    payload: T;
    page?: number; // ? question mark can be undefined
    size?: number;
    totalElements?: number;
    totalPages?: number;
}
